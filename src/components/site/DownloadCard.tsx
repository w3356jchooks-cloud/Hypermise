import { Download, Hourglass } from "lucide-react";

import { Button } from "@/components/ui/button";
import { RELEASE } from "@/content/site";
import { isDownloadAvailable } from "@/lib/download";

export function DownloadCard() {
  const url = RELEASE.downloadUrl;
  const available = isDownloadAvailable(url);

  return (
    <div className="chamfer bg-neon p-px shadow-glow">
      <div className="chamfer bg-surface p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chamfer-sm bg-primary px-2.5 py-1 font-mono text-xs font-semibold uppercase text-primary-foreground">
            v{RELEASE.version}
          </span>
          <span className="rounded-sm border border-accent/50 px-2.5 py-1 font-mono text-xs uppercase text-accent">
            {RELEASE.channel}
          </span>
          {!available && (
            <span className="rounded-sm border border-dashed border-warning/70 px-2.5 py-1 font-mono text-xs uppercase text-warning">
              Coming shortly
            </span>
          )}
        </div>

        <h2 className="mt-5 text-2xl font-bold uppercase sm:text-3xl">Hypermise {RELEASE.version}</h2>
        <p className="mt-1 font-mono text-sm break-all text-muted-foreground">{RELEASE.fileName}</p>

        {available ? (
          <>
            <Button asChild variant="neon" size="xl" className="mt-6 h-auto min-h-12 w-full whitespace-normal py-3 text-center sm:w-auto">
              <a href={url} download>
                <Download /> Download .mcaddon
              </a>
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">
              Only download Hypermise from this official page.
            </p>
          </>
        ) : (
          <>
            <div
              role="status"
              className="mt-6 flex items-start gap-3 rounded-sm border border-dashed border-warning/60 bg-warning/5 p-4"
            >
              <Hourglass aria-hidden className="mt-0.5 size-5 shrink-0 text-warning" />
              <div className="text-sm">
                <p className="font-display text-lg font-semibold uppercase text-warning">Download package coming shortly</p>
                <p className="mt-1 text-muted-foreground">
                  {RELEASE.uploadNote} Any other link claiming to be this file is not from us.
                </p>
              </div>
            </div>
            <Button
              variant="placeholder"
              size="xl"
              disabled
              aria-disabled="true"
              className="mt-4 h-auto min-h-12 w-full whitespace-normal py-3 text-center sm:w-auto"
            >
              <Download /> Download coming shortly
            </Button>
          </>
        )}
      </div>
    </div>
  );
}