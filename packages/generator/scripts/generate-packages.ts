import { packages } from "../constants";
import { NPM } from "../lib/npm";
import { CacheService, stringToHash } from "lib";
import ms from "ms";

const npm = new NPM();
const cache = new CacheService();

const getPkg = async (pkgId: string) => {
  const data = await npm.getPackage(pkgId);
  const versions = Object.keys(data.versions)
    .filter((v) => !v.includes("-"))
    .reverse()
    .slice(0, 100)
    .reverse()
    .reduce((prev, next) => {
      return { ...prev, [next]: data.versions[next] };
    }, {});

  return {
    ...data,
    versions,
  };
};

export async function generatePackages() {
  for (const pkgId of packages) {
    await cache.set(stringToHash(pkgId), () => getPkg(pkgId), ms("10 years"));
  }
}

generatePackages();
