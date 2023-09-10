import reactStringReplace from "react-string-replace";

import { BiLinkExternal } from "react-icons/bi";

type SourceProps = {
  word: string;
  info: string;
  pageTitle: string;
  url: string;
};

export default function Source({ word, info, pageTitle, url }: SourceProps) {
  return (
    <span className="group relative inline-block max-h-0 max-w-sm">
      <span className="pointer-events-none absolute -left-2 top-0 z-50 w-96 rounded-lg border-2 border-primary bg-secondary_dark p-2 text-white opacity-0 transition-opacity delay-75 group-hover:pointer-events-auto group-hover:opacity-100">
        {reactStringReplace(info, word, (_match, index, _offset) => (
          <p className="inline-block font-bold text-primary" key={index}>
            {word}
          </p>
        ))}
        <a
          className="block text-xs text-sky-500 underline decoration-dashed"
          href={url}
          target="_blank"
        >
          {pageTitle}
          <BiLinkExternal className="ml-0.5 inline" />
        </a>
      </span>
      <p className="pointer-events-auto text-primary underline decoration-dashed">
        {word}
      </p>
    </span>
  );
  // idea: highlight the relevant term that is in the definition.
}
