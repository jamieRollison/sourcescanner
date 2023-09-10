import { type Annotation } from "~/utils/types";
import { type ReactNode } from "react";
import reactStringReplace from "react-string-replace";
import Source from "~/components/source";

type ScannedTextProps = {
  annotations: Annotation[];
  source_text: string;
}

export default function ScannedText({ annotations, source_text }: ScannedTextProps) {
  let annotated_text: ReactNode[] = [source_text];

  annotations.map(({word, definition, url, article}) => {
    annotated_text = reactStringReplace(
      annotated_text,
      word,
      (_match, index, _offset) => (
        <Source word={word} info={definition} pageTitle={article} url={url} key={index}></Source>
      ));
      console.log(annotated_text);
  })

  return (
    annotated_text
  )
}