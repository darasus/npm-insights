import { CacheService, stringToHash } from "lib";
import ms from "ms";
import { getPackageStats } from "package-build-stats";
import { packages } from "../constants";
import { concurrently } from "../utils/concurrently";
import { getPackageDetails } from "../utils/getPackageDetails";

const cache = new CacheService();

export async function generateSizeDetails() {
  for (const pkgId of packages) {
    const pkgDetails = await getPackageDetails(pkgId);
    if (!pkgDetails) return;
    const promises = [];

    const versions = (Object.keys(pkgDetails.versions) as string[])
      .filter((v) => !v.includes("-"))
      .reverse();

    for (const pgkVersion of versions) {
      const func = async () => {
        const name = `${pkgId}@${pgkVersion}`;
        try {
          await cache.set(
            stringToHash(name),
            () => getPackageStats(name, { minifier: "esbuild" }),
            ms("10 years")
          );
        } catch (error) {}
      };

      promises.push(func);
    }

    await concurrently(promises, 10);
  }
}
