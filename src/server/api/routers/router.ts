import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import OpenAI from "openai";
import { parseGPTResponse, searchMetaphorAPI } from "~/utils/api-helpers";

import { env } from "~/env.mjs";
import type { ChatCompletionMessageParam } from "openai/resources/chat";
import type { Annotation, DictionaryEntry } from "~/utils/types";

export const router = createTRPCRouter({
  annotate: publicProcedure
    .input(z.string())
    .mutation(async ({ input }): Promise<Annotation[]> => {
      const openai = new OpenAI({ apiKey: env.GPT_KEY });

      const messages: ChatCompletionMessageParam[] = [
        {
          role: "user",
          content: `consider the following paragraph and make a JSON list of objects that follow the schema 
        {word: string, “definition”: string} without assigning it to a variable. in these objects, the 'word' is 
        a string with a word / concept / proper noun that may need to be defined, and the 'definition' is a string 
        with the first entry's definition. ignore words which are common or semantically neutral and if something 
        seems like a proper noun, include it.`,
        },
        {
          role: "user",
          content: input,
        },
      ];

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
      });
      const dictionary = parseGPTResponse(response);
      const search = dictionary.map(async (entry: DictionaryEntry) => {
        const { results: response } = await searchMetaphorAPI(
          "Here is an article about" +
            entry.word +
            ", which is " +
            entry.definition,
        );
        if (!response) throw new Error("No response from Metaphor API");

        const result = response[0];
        if (!result) throw new Error("No search results");

        const { title: article, url, score } = result;
        if (!article || !url || !score)
          throw new Error("Not enough information from Metaphor API");

        console.log({ article, url, ...entry, score });

        return {
          ...entry,
          article,
          url,
          score,
        };
      });

      return (await Promise.all(search)).filter(({ score }) => score > 0.1);
    }),
});
