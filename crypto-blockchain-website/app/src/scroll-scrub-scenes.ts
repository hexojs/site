/**
 * Scene data for the scroll-scrub journey engine.
 *
 * This build ships the NON-ANIMATED path (see design-brief.md — video
 * generation required a paid plan the user declined). This file and the
 * <ScrollScrub /> component are intentionally UNUSED and unreferenced by
 * any route; kept filled with real (non-placeholder) values only so no
 * scaffold token survives, per the template contract.
 */
import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#D9B76B",
  background: "#10142B",
  ink: "#F3EFE4",
  muted: "#A8ACC6",
};

export const scrollScrubScenes: ScrollScrubScene[] = [];
