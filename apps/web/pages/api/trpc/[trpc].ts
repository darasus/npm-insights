import { initTRPC } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { CacheService, stringToHash } from "lib";
import { z } from "zod";

export const t = initTRPC.create();

export const appRouter = t.router({
  package: t.procedure
    .input(
      z.object({
        pkgId: z.string(),
      })
    )
    .query(async ({ input }) => {
      const cache = new CacheService();
      const { name, description, versions, ...rest } = (await cache.get(
        stringToHash(input.pkgId)
      )) as any;

      let sizeHistory: Array<{ version: string; size: number; gzip: number }> =
        [];

      for (const v of Object.keys(versions)) {
        const data = (await cache.get(
          stringToHash(`${input.pkgId}@${v}`)
        )) as any;

        sizeHistory.push({
          version: v,
          size: data?.size,
          gzip: data?.gzip,
        });
      }

      sizeHistory = sizeHistory.filter(
        (i: any) => Boolean(i.size) && Boolean(i.gzip)
      );

      return { name, description, sizeHistory };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
