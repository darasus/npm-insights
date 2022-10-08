import { compareSemanticVersions } from "lib";
import { z } from "zod";
import { t } from "../trpc";

export const packageRouter = t.router({
  getInfo: t.procedure
    .input(
      z.object({
        pkgId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const pkg = await ctx.npm.fetchPackage(input.pkgId);

      return { name: pkg.name, description: pkg.description };
    }),
  getSizeHistory: t.procedure
    .input(
      z.object({
        pkgId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const pkg = await ctx.npm.fetchPackage(input.pkgId);

      let sizeHistory: Array<{ version: string; size: number; gzip: number }> =
        await ctx.npm
          .fetchPackageStats(input.pkgId, Object.keys(pkg.versions))
          .then((packageStats) => {
            return packageStats.map(({ version, size, gzip }: any) => {
              return {
                version,
                size,
                gzip,
              };
            });
          });

      sizeHistory = sizeHistory.filter(
        (i: any) => Boolean(i.size) && Boolean(i.gzip)
      );

      return { sizeHistory };
    }),
  searchPackage: t.procedure
    .input(
      z.object({
        q: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const data = await ctx.npm.searchPackages(input.q);
      const response = data.objects.map((pkg: any) => {
        return {
          name: pkg.package.name as string,
          version: pkg.package.version as string,
          description: pkg.package.description as string,
        };
      });

      return response;
    }),
  perge: t.procedure.query(async ({ ctx }) => {
    await ctx.cache.perge();
    return { status: "ok" };
  }),
});
