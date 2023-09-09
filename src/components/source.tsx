type SourceProps = {
  word: string;
  info: string;
  pageTitle: string;
  url: string;
};

export default function Source({ word, info, pageTitle, url }: SourceProps) {
  return (
    <span className="group relative inline-block max-h-0 max-w-sm">
      <span className="absolute -left-2 bottom-0 w-96 rounded-lg border-2 border-primary bg-secondary_dark p-2 text-white opacity-0 transition-opacity delay-75 group-hover:opacity-100">
        <p className="text-xs">{info}</p>
        <a
          className="text-xs text-sky-500 underline decoration-dashed"
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
