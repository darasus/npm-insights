import { TRPCError } from '@trpc/server'
import { format, sub, isWeekend } from 'date-fns'
import { z } from 'zod'
import { t } from '../trpc'

export const npmRouter = t.router({
  getInfo: t.procedure
    .input(
      z.object({
        pkgId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const pkg = await ctx.npm.fetchPackage(input.pkgId)

      if (!pkg) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Package with this name is not found.',
        })
      }

      const repositoryUrl =
        typeof pkg?.repository === 'string'
          ? pkg?.repository
          : pkg?.repository?.url

      return {
        name: pkg.name,
        description: pkg.description,
        homepage: pkg.homepage,
        repository: repositoryUrl?.replace('git+', '').replace('.git', ''),
        latestVersion: pkg['dist-tags'].latest,
      }
    }),
  getSizeHistory: t.procedure
    .input(
      z.object({
        pkgId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const pkg = await ctx.npm.fetchPackage(input.pkgId)

      if (!pkg) return null

      let sizeHistory: Array<{ version: string; size: number; gzip: number }> =
        await Promise.all(
          Object.keys(pkg.versions).map((v) => {
            return ctx.npm
              .fetchPackageStats(input.pkgId, v)
              .then(({ size, gzip }: any) => {
                return {
                  version: v,
                  size,
                  gzip,
                }
              })
          })
        )

      sizeHistory =
        sizeHistory?.filter((i: any) => Boolean(i.size) && Boolean(i.gzip)) ??
        []

      return { sizeHistory }
    }),
  searchPackage: t.procedure
    .input(
      z.object({
        q: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const data = await ctx.npm.searchPackages(input.q)
      const response = data?.objects?.map((pkg: any) => {
        return {
          name: pkg.package.name as string,
          version: pkg.package.version as string,
          description: pkg.package.description as string,
        }
      }) as Array<{ name: string; version: string; description: string }>

      return response
    }),
  getPackageDownloads: t.procedure
    .input(
      z.object({
        pkgId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const data = await ctx.npm.fetchDownloads(
        input.pkgId,
        format(
          sub(new Date(), {
            years: 1,
          }),
          'yyyy-MM-dd'
        ),
        format(
          sub(new Date(), {
            days: 1,
          }),
          'yyyy-MM-dd'
        )
      )

      return data.downloads
        .filter((item: any) => isWeekend(new Date(item.day)))
        .map((item: any) => {
          return { count: item.downloads as string, date: item.day as string }
        })
    }),
  perge: t.procedure.query(async ({ ctx }) => {
    await ctx.cache.perge()
    return { status: 'ok' }
  }),
})

export const githubRouter = t.router({
  getRepo: t.procedure
    .input(
      z.object({
        pkgId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const pkg = await ctx.npm.fetchPackage(input.pkgId)

      if (!pkg) return null
      if (!pkg.repository) return null

      const repositoryUrl =
        typeof pkg?.repository === 'string'
          ? pkg?.repository
          : pkg?.repository?.url

      const [owner, repo] = repositoryUrl
        .replace('git+', '')
        .replace('.git', '')
        .replace('https://github.com/', '')
        .replace('http://github.com/', '')
        .split('/')

      return ctx.github.fetchRepository({ owner, repo }).then((res) => res.data)
    }),
  getRepositoryReadme: t.procedure
    .input(
      z.object({
        pkgId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const pkg = await ctx.npm.fetchPackage(input.pkgId)

      const repositoryUrl =
        typeof pkg?.repository === 'string'
          ? pkg?.repository
          : pkg?.repository?.url

      if (!pkg) return null
      if (!repositoryUrl) return null

      const [owner, repo] = repositoryUrl
        .replace('git+', '')
        .replace('.git', '')
        .replace('https://github.com/', '')
        .replace('http://github.com/', '')
        .split('/')

      const response = await ctx.github
        .fetchRepositoryReadme({ owner, repo })
        .then((res) => res.data)

      if ('download_url' in response) {
        const md = await fetch(response?.download_url as any).then((res) =>
          res.text()
        )

        return md
      }

      return null
    }),
})
