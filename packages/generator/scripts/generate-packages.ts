import { packages } from "../constants";
import { NPM } from "../lib/npm";
import { CacheService, stringToHash } from "lib";
import ms from "ms";

const npm = new NPM();
const cache = new CacheService();

const getPkg = async (pkgId: string) => {
  const data = await npm.getPackage(pkgId);
  return {
    ...data,
    versions: Object.keys(data.versions)
      .reverse()
      .slice(0, 100)
      .reverse()
      .reduce((prev, next) => {
        if (next.includes("-")) {
          return prev;
        }

        return { ...prev, [next]: data.versions[next] };
      }, {}),
  };
};

export async function generatePackages() {
  for (const pkgId of packages) {
    await cache.set(stringToHash(pkgId), () => getPkg(pkgId), ms("10 years"));
  }
}

generatePackages();
