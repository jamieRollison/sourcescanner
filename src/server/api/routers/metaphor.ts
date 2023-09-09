import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import OpenAI from "openai";

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
          content: `consider the following paragraph 
    and make a list of 2-tuples in javascript without assigning it to a variable where 
    the first value in each tuple is a string with a word / concept / proper noun that
     may need to be defined, and the second value is a string with the first entry's definition. 
     ignore words which are common or semantically neutral and if something seems like a proper noun, include it.`,
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
    })
  });
