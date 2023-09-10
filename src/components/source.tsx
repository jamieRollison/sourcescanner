import reactStringReplace from "react-string-replace";

type SourceProps = {
  word: string;
  info: string;
  pageTitle: string;
  url: string;
};

// function bold(info: string, word: string): string {
//   return info.replace(word, "<b>" + word + "</b>");
// }

export default function Source({ word, info, pageTitle, url }: SourceProps) {
  return (
    <span className="group relative inline-block max-h-0 max-w-sm">
      <span className="absolute -left-2 bottom-0 w-96 rounded-lg border-2 border-primary bg-secondary_dark p-2 text-white opacity-0 transition-opacity delay-75 group-hover:opacity-100">
        {reactStringReplace(info, word, (match, index, offset) => (
          <p className="inline-block font-bold text-primary" key={index}>
            {word}
          </p>
        ))}
        <a
          className="block text-xs text-sky-500 underline decoration-dashed"
          href={url}
        >
          {pageTitle}
        </a>
      </span>
      <p className="text-primary underline decoration-dashed">{word}</p>
    </span>
  );
  // idea: highlight the relevant term that is in the definition.
}
