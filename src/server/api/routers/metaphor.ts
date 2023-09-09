import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { env } from "~/env.mjs";
import api from "api";

export const metaphorRouter = createTRPCRouter({
  search: publicProcedure.input(z.string()).query(async ({ input }) => {
    const sdk = api("@metaphorapi/v1.0#1fg9zd1pll1b6le6");

    sdk.auth(env.METAPHOR_SECRET);
    return sdk
      .search({
        query: input,
        numResults: 10,
        useAutoprompt: true,
        type: "neural",
      })
      .then((res: any) => {
        return res.data;
      })
      .catch((err: Error) => {
        console.error(err);
        return [];
      });
  }),
});
