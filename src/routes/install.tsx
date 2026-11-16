import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { INSTALL_STEPS, RELEASE } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/install")({
  head: () => ({
    meta: pageMeta(
      "Install guide — Hypermise for Minecraft Bedrock",
      "Step-by-step instructions for importing the Hypermise .mcaddon on Windows, Android and iOS, activating it on a world, and removing it again.",
    ),
  }),
  component: InstallPage,
});

const PLATFORM_STEPS = {
  windows: [
    `Double-click ${RELEASE.fileName}. Minecraft opens and starts importing.`,
    "Wait for the “Successfully imported” message at the top of the screen.",
  ],
  android: [
    `Tap ${RELEASE.fileName} in your downloads or file manager.`,
    "Choose Minecraft when asked which app to open it with, then wait for the import message.",
  ],
  ios: [
    `Open the Files app and find ${RELEASE.fileName}.`,
    "Tap and hold → Share → Minecraft, then wait for the import message.",
  ],
};

const SHARED_STEPS = INSTALL_STEPS;

function InstallPage() {
  return (
    <>
      <PageHeader eyebrow="// Installation" title="Install guide">
        About five minutes on Windows, Android or iOS.
      </PageHeader>
      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6">
        <ol className="space-y-6">
          {SHARED_STEPS.map(([title, body], i) => (
            <li key={title} className="flex gap-4 sm:gap-6">
              <span className="chamfer-sm grid size-12 shrink-0 place-items-center bg-secondary font-mono text-lg font-semibold text-primary">
                0{i + 1}
              </span>
              <div className="pt-1">
                <h2 className="text-xl font-semibold uppercase">{title}</h2>
                <p className="mt-1 text-muted-foreground">
                  {i === 1 ? (
                    <>
                      Get {RELEASE.fileName} from the{" "}
                      <Link to="/download" className="text-accent underline underline-offset-4">
                        official download page
                      </Link>{" "}
                      once it's available.
                    </>
                  ) : (
                    body
                  )}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14">
          <h2 className="text-2xl font-bold uppercase">Import by platform</h2>
          <Tabs defaultValue="windows" className="mt-5">
            <TabsList className="grid h-auto w-full grid-cols-3 rounded-sm bg-surface p-1">
              <TabsTrigger value="windows" className="rounded-sm py-2 font-display uppercase data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Windows</TabsTrigger>
              <TabsTrigger value="android" className="rounded-sm py-2 font-display uppercase data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Android</TabsTrigger>
              <TabsTrigger value="ios" className="rounded-sm py-2 font-display uppercase data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">iOS</TabsTrigger>
            </TabsList>
            {(Object.keys(PLATFORM_STEPS) as (keyof typeof PLATFORM_STEPS)[]).map((k) => (
              <TabsContent key={k} value={k} className="rounded-sm mt-3 border border-border bg-surface p-5">
                <ol className="list-decimal space-y-2 pl-5 text-muted-foreground">
                  {PLATFORM_STEPS[k].map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
              </TabsContent>
            ))}
          </Tabs>
          <p className="mt-3 text-sm text-muted-foreground">
            Consoles can't import .mcaddon files directly. See{" "}
            <Link to="/compatibility" className="text-accent underline underline-offset-4">
              compatibility
            </Link>
            .
          </p>
        </div>

        <div className="mt-14 rounded-sm border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold uppercase">Removing Hypermise</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted-foreground">
            <li>Edit the world → Resource Packs / Behavior Packs → select Hypermise → Deactivate.</li>
            <li>To delete it entirely: Settings → Storage → find Hypermise → Delete.</li>
          </ol>
        </div>
      </section>
    </>
  );
}