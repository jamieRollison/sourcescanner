import type { DictionaryEntry } from "./types";
import type { OpenAI } from "openai";
import { env } from "~/env.mjs";
import sdk from "@api/metaphorapi";

export const parseGPTResponse = (
  response: OpenAI.Chat.Completions.ChatCompletion,
): DictionaryEntry[] => {
  const text = response.choices[0]?.message.content;
  if (!text || response.choices[0]?.finish_reason != "stop") return [];

  const listString =
    text?.slice(text.indexOf("["), text.indexOf("]") + 1) ?? "";

  const list = JSON.parse(listString) as DictionaryEntry[];

  return list;
};

export const searchMetaphorAPI = async (query: string) => {
  sdk.auth(env.METAPHOR_SECRET);
  return sdk
    .search({
      query,
      numResults: 1,
      useAutoprompt: true,
      type: "neural",
    })
    .then((res) => {
      return res.data;
    })
    .catch((err: Error) => {
      throw err;
    });
};
