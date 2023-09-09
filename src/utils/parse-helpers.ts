import type { DictionaryEntry } from "./types";
import type { OpenAI } from "openai";

export const parseGPTResponse = (
  response: OpenAI.Chat.Completions.ChatCompletion,
): DictionaryEntry[] => {
  const text = response.choices[0]?.message.content;
  if (!text || response.choices[0]?.finish_reason != "stop") return [];

  const code = text.split("```")[1];
  const listString = code?.slice(code.indexOf("["), code.indexOf("`")) ?? "";
  const list = JSON.parse(listString) as DictionaryEntry[];

  console.log(list);

  return [];
};
