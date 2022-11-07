import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { NextRequest } from 'next/server'
import { createContext } from '../../../server/context'
import { appRouter } from '../../../server/routers/_app'

export function middleware(req: NextRequest) {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: (ctx) => createContext(ctx),
  })
}
