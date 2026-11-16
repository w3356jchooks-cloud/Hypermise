import { describe, expect, it } from "vitest";

import { PERF_RESULTS, RELEASE } from "@/content/site";
import { isDownloadAvailable } from "@/lib/download";

describe("download availability", () => {
  it("shows the placeholder while no .mcaddon has been uploaded", () => {
    expect(isDownloadAvailable(null)).toBe(false);
  });

  it("never treats a dummy link as a real download", () => {
    expect(isDownloadAvailable("#")).toBe(false);
    expect(isDownloadAvailable("https://example.com/page")).toBe(false);
    expect(isDownloadAvailable("http://example.com/Hypermise-5.5.mcaddon")).toBe(false);
  });

  it("offers the download once a real https .mcaddon URL is set", () => {
    expect(isDownloadAvailable("https://cdn.example.com/Hypermise-5.5.mcaddon")).toBe(true);
  });

  it("v5.5 currently ships with no download link", () => {
    expect(RELEASE.downloadUrl).toBeNull();
  });
});

describe("performance results", () => {
  it("publishes no measured numbers until real A/B tests exist", () => {
    for (const r of PERF_RESULTS) {
      expect(r.status).toBe("Not yet measured");
      expect(r.minecraftVersion).toBeNull();
      expect(r.avgFps).toBeNull();
      expect(r.onePercentLow).toBeNull();
      expect(r.frameTimeConsistency).toBeNull();
    }
  });
});

describe("capability guarantee", () => {
  it("lists fixed/300 FPS and every-device performance as NOT guaranteed", async () => {
    const { NOT_GUARANTEED, GUARANTEES } = await import("@/content/site");
    const titles = NOT_GUARANTEED.map((n) => n.title);
    expect(titles).toContain("Any fixed FPS, including 300 FPS");
    expect(titles).toContain("Performance on every device & world");
    expect(GUARANTEES.some((g) => /300 FPS/.test(g.title))).toBe(false);
  });
});