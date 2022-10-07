import { CacheService, stringToHash } from "lib";

const cache = new CacheService();

export async function getPackageDetails(pkgId: string) {
  const pkg = await cache.get<any>(stringToHash(pkgId));
  return pkg;
}
