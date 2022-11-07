import { httpLink, loggerLink, TRPCClientError } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'
import superjson from 'superjson'
import { AppRouter } from '../server/routers/_app'
import { getBaseUrl } from 'utils'
import { ResponseMeta } from '@trpc/server/http'
import { NextPageContext } from 'next'

/**
 * A set of strongly-typed React hooks from your `AppRouter` type signature with `createReactQueryHooks`.
 * @link https://trpc.io/docs/react#3-create-trpc-hooks
 */
export const trpc = createTRPCNext<AppRouter>({
  config() {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    return {
      /**
       * @link https://trpc.io/docs/data-transformers
       */
      transformer: superjson,
      /**
       * @link https://trpc.io/docs/links
       */
      links: [
        // adds pretty logs to your console in development and logs errors in production
        loggerLink({
          enabled: (opts) =>
            // eslint-disable-next-line turbo/no-undeclared-env-vars
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      queryClientConfig: {
        defaultOptions: { queries: { refetchOnWindowFocus: false } },
      },
    }
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
  responseMeta({
    ctx,
    clientErrors,
  }: {
    ctx: NextPageContext
    clientErrors: TRPCClientError<AppRouter>[]
  }): ResponseMeta {
    if (clientErrors.length) {
      // propagate http first error from API calls
      return {
        status: clientErrors[0].data?.httpStatus ?? 500,
      }
    }
    // cache request for 1 day + revalidate once every second
    const ONE_DAY_IN_SECONDS = 60 * 60 * 24
    return {
      headers: {
        'cache-control': `s-maxage=60, stale-while-revalidate=${ONE_DAY_IN_SECONDS}`,
      },
    }
  },
})
