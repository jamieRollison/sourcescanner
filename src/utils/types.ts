export interface DictionaryEntry {
  word: string;
  definition: string;
}

export interface Annotation extends DictionaryEntry {
  url: string;
  article: string;
}
