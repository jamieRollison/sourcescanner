import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { metaphorRouter } from "./routers/metaphor";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  metaphor: metaphorRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
