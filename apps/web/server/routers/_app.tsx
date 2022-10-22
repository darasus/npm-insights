import { t } from '../trpc'
import { npmRouter, githubRouter } from './package'

export const appRouter = t.router({
  npm: npmRouter,
  github: githubRouter,
})

export type AppRouter = typeof appRouter
