import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { env } from "~/env.mjs";
import sdk from "@api/metaphorapi";

export const metaphorRouter = createTRPCRouter({
  search: publicProcedure.input(z.string()).query(async ({ input }) => {
    sdk.auth(env.METAPHOR_SECRET);
    return sdk
      .search({
        query: input,
        numResults: 10,
        useAutoprompt: true,
        type: "neural",
      })
      .then((res) => {
        return res.data;
      })
      .catch((err: Error) => {
        console.error(err);
        return [];
      });
  }),
});
