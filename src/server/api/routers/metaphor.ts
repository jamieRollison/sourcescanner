import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import OpenAI from "openai";
import { parseGPTResponse } from "~/utils/parse-helpers";

import { env } from "~/env.mjs";
import sdk from "@api/metaphorapi";
import { CreateChatCompletionRequestMessage } from "openai/resources/chat";

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
  askgpt: publicProcedure.input(z.string()).query(async ({ input }) => {
    const openai = new OpenAI();
    const messages = [
      {
        role: "user",
        content: `consider the following paragraph and make a list of objects in javascript that follow the schema 
        {“name”: string, “definition”: string} without assigning it to a variable. in these objects, the ‘name’ is 
        a string with a word / concept / proper noun that may need to be defined, and the ‘definition’ is a string 
        with the first entry’s definition. ignore words which are common or semantically neutral and if something 
        seems like a proper noun, include it.`,
      },
      {
        role: "user",
        content: input,
      },
    ] as CreateChatCompletionRequestMessage[];

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
    });
    const responseMessage = [];
  }),
});
