import type { NextRequest } from 'next/server'
import { FetchHandlerOptions } from '@trpc/server/adapters/fetch'
import { appRouter, AppRouter } from './server/routers/_app'
import { createContext } from './server/context'
import { HTTPRequest } from '@trpc/server/dist/http/internals/types'
import { resolveHTTPResponse } from '@trpc/server/http'

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/api/trpc')) {
    return fetchRequestHandler({
      endpoint: '/api/trpc',
      req,
      router: appRouter,
      createContext: (ctx) => createContext(ctx),
    })
  }
}

type FetchHandlerRequestOptions = {
  req: Request
  endpoint: string
} & FetchHandlerOptions<AppRouter>

async function fetchRequestHandler(
  opts: FetchHandlerRequestOptions
): Promise<Response> {
  const createContext = async () => {
    return opts.createContext?.({ req: opts.req })
  }

  const url = new URL(opts.req.url)
  const path = url.pathname.slice(opts.endpoint.length + 1)
  const req: HTTPRequest = {
    query: url.searchParams,
    method: opts.req.method,
    headers: Object.fromEntries(opts.req.headers),
    body: await opts.req.text(),
  }

  const result = await resolveHTTPResponse({
    req,
    createContext,
    path,
    router: opts.router,
    batching: opts.batching,
    responseMeta: opts.responseMeta,
    onError(o) {
      opts?.onError?.({ ...o, req: opts.req })
    },
  })

  const res = new Response(result.body, {
    status: result.status,
  })

  for (const [key, value] of Object.entries(result.headers ?? {})) {
    if (typeof value === 'undefined') {
      continue
    }

    if (typeof value === 'string') {
      res.headers.set(key, value)
      continue
    }

    for (const v of value) {
      res.headers.append(key, v)
    }
  }
  return res
}
