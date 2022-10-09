import Redis from "ioredis";

export class CacheService {
  redis = new Redis(process.env.REDIS_URL as string);

  fetch = async (
    key: string,
    fetcher: () => Promise<string | null>,
    expires: number
  ) => {
    const existing = await this.get(key);

    if (existing !== null) return existing;

    return this.set(key, fetcher, expires);
  };

  get = async (key: string): Promise<string | null> => {
    const value = await this.redis.get(key);
    if (value === null) return null;
    return value;
  };

  set = async (
    key: string,
    fetcher: () => Promise<string | null>,
    expires: number
  ) => {
    const value = await fetcher();
    if (value) {
      await this.redis.set(key, value, "EX", expires);
    }
    return value;
  };

  del = async (key: string) => {
    await this.redis.del(key);
  };

  perge = async () => {
    await this.redis.flushall();
  };
}
