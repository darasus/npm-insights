import got from "got";
import { CacheService, stringToHash } from "lib";
import ms from "ms";

export class NPM {
  cache = new CacheService();

  async getPackage(pkgId: string) {
    const data = await this.cache.fetch(
      stringToHash(`package-info:${pkgId}`),
      async () => {
        const url = `https://registry.npmjs.org/${pkgId}`;
        const res = await got(url);
        return JSON.parse(res.body);
      },
      ms("1d")
    );

    return data ? JSON.parse(data) : null;
  }
}
