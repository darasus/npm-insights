import ms from "ms";
import { CacheService } from "./cache";
import { compareSemanticVersions } from "./compareSemanticVersions";
import { stringToHash } from "./hash";

export class NPM {
  cache = new CacheService();

  async fetchPackage(pkgId: string) {
    const data = await this.cache.fetch(
      stringToHash(`pkg3:${pkgId}`),
      async () => {
        const url = `https://registry.npmjs.org/${pkgId}`;
        const res = await fetch(url);
        const { time, users, ...data } = await res.json();
        const versions = Object.keys(data.versions)
          .filter((v) => !v.includes("-"))
          .sort((a: any, b: any) => {
            return compareSemanticVersions(a, b);
          })
          .reverse()
          .slice(0, 10)
          .reverse()
          .reduce((prev, next) => {
            return { ...prev, [next]: data.versions[next] };
          }, {});
        return JSON.stringify({ ...data, versions });
      },
      ms("10 years")
    );

    return data ? JSON.parse(data) : null;
  }

  async fetchPackageStats(pkgId: string, version: string) {
    const data = await this.cache.fetch(
      stringToHash(`package-sizes:${pkgId}:${version}`),
      async () => {
        const url = new URL("https://package-size-q4phwtlcaa-ew.a.run.app ");
        url.searchParams.set("pkgId", pkgId);
        url.searchParams.set("version", version);
        const response = await fetch(url);
        const data = await response.json();
        return JSON.stringify(data);
      },
      ms("10 years")
    );

    return data ? JSON.parse(data) : null;
  }

  async searchPackages(q: string) {
    const data = await this.cache.fetch(
      stringToHash(`search-package:${q}`),
      async () => {
        const url = new URL("https://registry.npmjs.org/-/v1/search");
        url.searchParams.set("text", q);
        const response = await fetch(url);
        const data = await response.json();
        return JSON.stringify(data);
      },
      ms("10 years")
    );

    return data ? JSON.parse(data) : null;
  }

  async fetchDownloads(pkgId: string, start: string, end: string) {
    const data = await this.cache.fetch(
      stringToHash(`package-downloads:${pkgId}:${start}:${end}`),
      async () => {
        const url = `https://api.npmjs.org/downloads/range/${start}:${end}/${pkgId}`;
        const response = await fetch(url);
        const data = await response.json();
        return JSON.stringify(data);
      },
      ms("1d")
    );

    return data ? JSON.parse(data) : null;
  }
}
