import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { CacheService, GitHub, NPM } from 'lib'

// create context based of incoming request
// set as optional here so it can also be re-used for `getStaticProps()`
export const createContext = async (
  opts?: trpcNext.CreateNextContextOptions
) => {
  return {
    req: opts?.req,
    res: opts?.res,
    npm: new NPM(),
    cache: new CacheService(),
    github: new GitHub(),
  }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>
