"use client";

import { useEffect, useState } from "react";

type WidgetEmbedCodeProps = {
  code: string;
};

export default function WidgetEmbedCode({ code }: WidgetEmbedCodeProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-border/40 p-4">
      <pre className="whitespace-pre-wrap text-sm text-mutedText">{code}</pre>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy embed code"
        className="absolute right-4 top-4 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-primaryDark transition hover:border-primaryAccent hover:text-primaryAccent"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
