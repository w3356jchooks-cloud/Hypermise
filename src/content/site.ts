import {
  BadgeCheck,
  Boxes,
  FileCheck2,
  FlaskConical,
  ListChecks,
  ShieldOff,
  FileArchive,
  Layers,
  NotebookPen,
  ShieldCheck,
  ToggleRight,
  type LucideIcon,
} from "lucide-react";

export const NAV = [
  { to: "/features", label: "Features" },
  { to: "/download", label: "Download" },
  { to: "/guarantee", label: "Guarantee" },
  { to: "/performance", label: "Performance" },
  { to: "/changelog", label: "Version notes" },
  { to: "/install", label: "Install" },
  { to: "/compatibility", label: "Compatibility" },
  { to: "/faq", label: "FAQ" },
] as const;

export const RELEASE = {
  version: "5.5",
  fileName: "HYPERMISE_5.5_BLOCK_ID_ALIAS_EXPANSION.mcaddon",
  channel: "Experimental",
  /**
   * Set to the real HTTPS URL of the uploaded .mcaddon once the binary exists.
   * Until then this MUST stay null so the site shows the labelled placeholder.
   */
  downloadUrl: null as string | null,
  /** Plain-language status of the package transfer, shown next to the placeholder. */
  uploadNote:
    "The Hypermise 5.5 package exists, but its transfer to this site's file storage hasn't completed yet. The download stays disabled until the real file is attached here.",
  /** Filled in only from the real attached file. */
  fileSize: null as string | null,
  sha256: null as string | null,
  releaseDate: null as string | null,
  targetMinecraft: null as string | null,
  testStatus: "Not yet measured" as const,
};

/** Version metadata shown on the download page. Unknown values say so plainly. */
export const RELEASE_META: { label: string; value: string; tone?: "warning" | undefined }[] = [
  { label: "Version", value: RELEASE.version },
  { label: "File name", value: RELEASE.fileName },
  { label: "Format", value: ".mcaddon (Bedrock add-on bundle)" },
  { label: "Edition", value: "Minecraft: Bedrock Edition only" },
  { label: "Channel", value: RELEASE.channel },
  { label: "Release date", value: RELEASE.releaseDate ?? "To be announced", tone: RELEASE.releaseDate ? undefined : "warning" },
  { label: "Target Minecraft version", value: RELEASE.targetMinecraft ?? "Being confirmed", tone: RELEASE.targetMinecraft ? undefined : "warning" },
  { label: "File size", value: RELEASE.fileSize ?? "Published with the file", tone: RELEASE.fileSize ? undefined : "warning" },
  { label: "SHA-256 checksum", value: RELEASE.sha256 ?? "Published with the file", tone: RELEASE.sha256 ? undefined : "warning" },
  { label: "Includes", value: "Candidate block-ID texture aliases (not verified against the exact vanilla atlas)" },
  { label: "Performance test status", value: RELEASE.testStatus, tone: "warning" },
  { label: "Requirements", value: "Minecraft only — no companion app, launcher, root or jailbreak" },
];

export type Feature = { icon: LucideIcon; title: string; body: string; tag?: string };

export const FEATURES: Feature[] = [
  {
    icon: Layers,
    title: "Block-ID texture aliases",
    tag: "New in 5.5 · Unverified",
    body: "Version 5.5 adds candidate aliases that map block identifiers to texture entries. They are candidates only and are not verified against the exact vanilla texture atlas, so some blocks may display incorrectly.",
  },
  {
    icon: FileArchive,
    title: "One-file .mcaddon bundle",
    body: "Hypermise ships as a single .mcaddon. Opening it hands the packs to Minecraft's own importer — no launchers, injectors or third-party tools.",
  },
  {
    icon: ShieldCheck,
    title: "Stays inside the add-on sandbox",
    body: "Hypermise only uses what Bedrock's official add-on system exposes. It does not modify the game client, so it cannot change how the engine itself runs.",
  },
  {
    icon: ToggleRight,
    title: "Per-world, reversible",
    body: "Activate it on the worlds you choose and deactivate it any time from world settings. Back up first — it is experimental.",
  },
  {
    icon: NotebookPen,
    title: "Honest version notes",
    body: "Every release lists what changed, what is unverified and what is known to be broken. No marketing numbers.",
  },
  {
    icon: Boxes,
    title: "Built for testers",
    body: "Hypermise is an experimental project. Reports of wrong or missing textures directly shape which aliases get verified next.",
  },
];

export type Limitation = { title: string; body: string };

export const LIMITATIONS: Limitation[] = [
  {
    title: "Native renderer",
    body: "Bedrock's rendering engine is compiled into the game. Add-ons supply content and resources to it; they cannot replace or rewrite it.",
  },
  {
    title: "Native chunk & render distance pipeline",
    body: "Render and simulation distance, and how chunks are generated, loaded and meshed, are controlled by the game, the device and the server. An add-on cannot raise, bypass or rewrite them.",
  },
  {
    title: "Native FPS cap",
    body: "Frame-rate limits come from the game, the platform and display sync settings. Hypermise cannot unlock or raise them.",
  },
  {
    title: "OS thermal & power controls",
    body: "Thermal throttling, battery saver and performance modes are decided by your device's operating system, entirely outside Minecraft.",
  },
  {
    title: "CPU / GPU overclocking",
    body: "Clock speeds are set by your hardware, firmware and drivers. An add-on cannot overclock or change them.",
  },
  {
    title: "Device refresh rate",
    body: "Your screen's refresh rate is a hardware limit. Frames beyond it are never shown, whatever the game produces.",
  },
  {
    title: "Native memory allocator",
    body: "How Bedrock allocates and frees memory is part of the engine. Add-ons have no access to it.",
  },
];

export type Guarantee = { icon: LucideIcon; title: string; body: string };

/** Commitments the project itself controls — and therefore can guarantee. */
export const GUARANTEES: Guarantee[] = [
  {
    icon: FileCheck2,
    title: "Transparent, version-labelled downloads",
    body: `Once the actual .mcaddon binary is attached, the download is the exact file named on its label (${RELEASE.fileName}), with its version, file size and SHA-256 checksum. Until then the download stays disabled — no file is included yet.`,
  },
  {
    icon: BadgeCheck,
    title: "Feature descriptions match the shipped files",
    body: "Every published feature description matches what is actually in the shipped files. Anything unverified — like the 5.5 block aliases, which are not verified against the exact vanilla atlas — is labelled unverified.",
  },
  {
    icon: ShieldOff,
    title: "No companion app or root required",
    body: "Minecraft opens the .mcaddon itself. The add-on needs no companion app, launcher, injector, root or jailbreak.",
  },
  {
    icon: ListChecks,
    title: "Native-engine limits disclosed, never advertised",
    body: "Capabilities an add-on can't deliver — like changing the native renderer or FPS cap — are disclosed up front and never advertised as delivered.",
  },
  {
    icon: FlaskConical,
    title: "Benchmarks only after repeatable A/B tests",
    body: "Benchmark figures are published only after repeatable A/B tests on the same named device, Minecraft version, world, settings and scene. Until then every result reads \"Not yet measured\".",
  },
];

/** Explicitly NOT guaranteed — outside what any Bedrock add-on controls. */
export const NOT_GUARANTEED: Limitation[] = [
  {
    title: "Any fixed FPS, including 300 FPS",
    body: "No specific frame rate is guaranteed. 300 FPS is a stretch target only, not an expected outcome.",
  },
  ...LIMITATIONS,
  {
    title: "Performance on every device & world",
    body: "Results depend on the device, world, settings and Minecraft version. No outcome is guaranteed across all of them.",
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "Will Hypermise increase my FPS?",
    a: "We're optimizing what an add-on can control and measuring the result. Hypermise will only claim an FPS or frame-time improvement after repeatable A/B tests on the same device, Minecraft version, world, settings, render distance, temperature and power state, and scene. No results have been measured yet. 300 FPS is a stretch target only — not an expected outcome and not a guarantee; whether any device gets near it depends on the hardware, display and the game's native cap. An add-on still cannot override Bedrock's native renderer, render distance, FPS cap, hardware or thermal settings, or memory allocator.",
  },
  {
    q: "Where is the 5.5 download?",
    a: "The Hypermise 5.5 package exists, but it hasn't been attached to this site yet — the download package is coming shortly. The download page shows a clearly labelled, disabled placeholder until it is. We will never point you to a mirror or a fake link.",
  },
  {
    q: "What are the candidate block-ID texture aliases?",
    a: "They are mappings from block identifiers to texture entries, added in 5.5. They are not verified against the exact vanilla atlas, so some blocks may show the wrong texture or the missing-texture pattern.",
  },
  {
    q: "Does it work on Java Edition?",
    a: "No. Hypermise is a Bedrock Edition add-on. Java Edition uses a different format and is not supported.",
  },
  {
    q: "Can I use it on Xbox, PlayStation or Switch?",
    a: "Consoles can't open .mcaddon files directly. Joining a world or Realm that already includes the packs may work, but this is untested.",
  },
  {
    q: "Is it safe for my existing worlds?",
    a: "It is experimental, so always back up a world before activating Hypermise. You can deactivate it from the world's settings at any time.",
  },
  {
    q: "Is Hypermise made by Mojang or Microsoft?",
    a: "No. Hypermise is an independent community project and is not an official Minecraft product.",
  },
];

export type Platform = { name: string; method: string; status: "Testing" | "Untested" | "Not supported" };

export const PLATFORMS: Platform[] = [
  { name: "Windows 10 / 11", method: "Double-click the .mcaddon file", status: "Testing" },
  { name: "Android", method: "Open the file with Minecraft", status: "Testing" },
  { name: "iOS / iPadOS", method: "Files app → Share → Minecraft", status: "Testing" },
  { name: "Xbox · PlayStation · Switch", method: "No direct import; via world or Realm only", status: "Untested" },
  { name: "Java Edition", method: "Different format", status: "Not supported" },
];

/* ---------------------------------------------------------------- Performance validation */

/** Everything that must be identical between the "without" (A) and "with" (B) runs. */
export const PERF_CONTROLS: { label: string; detail: string }[] = [
  { label: "Same device", detail: "One physical phone, tablet or PC for both A and B runs." },
  { label: "Same Minecraft version", detail: "Identical Bedrock build number, no updates between runs." },
  { label: "Same world", detail: "A copy of the same save, restored fresh before every run." },
  { label: "Same settings", detail: "Video, graphics and accessibility settings unchanged." },
  { label: "Same render distance", detail: "Fixed chunk count, written down with every result." },
  {
    label: "Same temperature & power state",
    detail: "Device cooled to rest, same charger and battery level, same power or performance mode.",
  },
  { label: "Same scene", detail: "Same spawn point, camera direction or route, time of day and weather." },
];

export const PERF_METRICS: { label: string; detail: string }[] = [
  { label: "Average FPS", detail: "Mean frames per second across the whole run." },
  {
    label: "1% low FPS",
    detail: "The frame rate of the slowest 1% of frames — what stutter actually feels like.",
  },
  {
    label: "Frame-time consistency",
    detail: "How evenly frames arrive, reported as the spread of frame times across the run.",
  },
];

export type PerfResult = {
  device: string;
  minecraftVersion: string | null;
  scene: string;
  avgFps: number | null;
  onePercentLow: number | null;
  frameTimeConsistency: string | null;
  status: "Not yet measured";
};

/**
 * Real measurements only. Every value stays null and every status stays
 * "Not yet measured" until reproducible before/after runs exist
 * for a named device and Minecraft version.
 */
export const PERF_RESULTS: PerfResult[] = [
  { device: "Windows 10 / 11 PC", minecraftVersion: null, scene: "Spawn area, fixed camera", avgFps: null, onePercentLow: null, frameTimeConsistency: null, status: "Not yet measured" },
  { device: "Android phone", minecraftVersion: null, scene: "Spawn area, fixed camera", avgFps: null, onePercentLow: null, frameTimeConsistency: null, status: "Not yet measured" },
  { device: "iOS / iPadOS", minecraftVersion: null, scene: "Spawn area, fixed camera", avgFps: null, onePercentLow: null, frameTimeConsistency: null, status: "Not yet measured" },
];

/** What a benchmark submission must include to be considered for the results table. */
export const BENCHMARK_FIELDS: string[] = [
  "Device make and model (e.g. the exact phone or PC parts)",
  "Operating system and version",
  "Minecraft Bedrock version and build number",
  "Hypermise version",
  "Video settings and render distance",
  "Display refresh rate and any FPS cap or V-Sync setting",
  "Power mode, charger state and how the device was cooled between runs",
  "The world and scene used (seed or save, spawn point, camera route)",
  "Several runs without Hypermise and several with it, each the same length",
  "Average FPS, 1% low FPS and frame-time data for every run",
];

export const INSTALL_STEPS: [string, string][] = [
  ["Back up your world", "Hypermise is experimental. Export or copy the world before you change it."],
  ["Download the .mcaddon", `Get ${RELEASE.fileName} from the official download page once it's available.`],
  ["Import it", "Open the file: Minecraft imports the packs itself. Platform steps are in the install guide."],
  ["Activate on a world", "Edit the world → Resource Packs (and Behavior Packs, if Hypermise is listed there) → My Packs → Activate."],
  ["Load and check", "Enter the world. If a block looks wrong, it's likely an unverified texture alias — see the version notes."],
];