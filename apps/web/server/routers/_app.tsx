import { t } from "../trpc";
import { packageRouter } from "./package";

export const appRouter = t.router({
  package: packageRouter,
});

export type AppRouter = typeof appRouter;
