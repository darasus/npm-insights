import ms from 'ms'
import { CacheService } from './cache'
import { compareSemanticVersions } from './compareSemanticVersions'
import { stringToHash } from './hash'
import { z } from 'zod'

export class NPM {
  cache = new CacheService()

  async fetchPackage(pkgId: string) {
    const url = `https://registry.npmjs.org/${pkgId}`
    const res = await fetch(url)
    const { time, users, ...data } = await res.json()

    if (!data.versions) return null

    const versions = Object.keys(data.versions)
      .filter((v) => !v.includes('-'))
      .sort((a: any, b: any) => {
        return compareSemanticVersions(a, b)
      })
      .reverse()
      .slice(0, 10)
      .reverse()
      .reduce((prev, next) => {
        return { ...prev, [next]: data.versions[next] }
      }, {})
    const response = { ...data, versions }

    return response
      ? z
          .object({
            name: z.string(),
            description: z.string(),
            repository: z
              .string()
              .optional()
              .or(
                z
                  .object({
                    url: z.string(),
                  })
                  .optional()
                  .default({ url: '' })
              ),
            homepage: z.string().nullish().default(null),
            'dist-tags': z.object({
              latest: z.string(),
            }),
            versions: z.record(z.string(), z.object({ name: z.string() })),
          })
          .parse(response)
      : null
  }

  async fetchPackageStats(pkgId: string, version: string) {
    const data = await this.cache.fetch(
      stringToHash(`package-sizes:${pkgId}:${version}`),
      async () => {
        const url = new URL('https://package-size-q4phwtlcaa-ew.a.run.app ')
        url.searchParams.set('pkgId', pkgId)
        url.searchParams.set('version', version)
        const response = await fetch(url)
        const data = await response.json()
        return JSON.stringify(data)
      },
      ms('10 years')
    )

    return data as any
  }

  async searchPackages(q: string) {
    const url = new URL('https://registry.npmjs.org/-/v1/search')
    url.searchParams.set('text', q)
    const response = await fetch(url)
    const data = await response.json()

    return data
  }

  async fetchDownloads(pkgId: string, start: string, end: string) {
    const url = `https://api.npmjs.org/downloads/range/${start}:${end}/${pkgId}`
    const response = await fetch(url)
    const data = await response.json()

    return data
  }
}
