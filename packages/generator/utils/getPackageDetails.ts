import { CacheService } from "lib";

const cache = new CacheService();

export async function getPackageDetails(pkgId: string) {
  const pkg = await cache.getString(pkgId);
  if (!pkg) return null;
  return JSON.parse(pkg);
}
