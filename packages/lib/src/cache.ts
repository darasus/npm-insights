import { Redis } from '@upstash/redis'

export class CacheService {
  redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  })

  fetch = async (
    key: string,
    fetcher: () => Promise<string | null>,
    expires: number
  ) => {
    const existing = await this.get(key)

    if (existing !== null) return existing

    return this.set(key, fetcher, expires)
  }

  get = async (key: string): Promise<string | null> => {
    const value = await this.redis.get<string>(key)
    if (value === null) return null
    return value
  }

  set = async (
    key: string,
    fetcher: () => Promise<string | null>,
    expires: number
  ) => {
    const value = await fetcher()
    if (value) {
      await this.redis.set(key, value, {
        ex: expires,
      })
    }
    return value
  }

  del = async (key: string) => {
    await this.redis.del(key)
  }

  perge = async () => {
    await this.redis.flushall()
  }
}
