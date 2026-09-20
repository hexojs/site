# Design Brief — 暗号通貨とブロックチェーン (Crypto & Blockchain)

## Design read
For curious newcomers and early investors in Japan who want a clear, calm,
trustworthy introduction to blockchain and cryptocurrency — confident and
precise, not hype-bro, not corporate-cold.

## Concept spine
Journey / waypoints. The site reads as a single chain of glowing translucent
blocks suspended in a dark void, each block linking to the next with a thread
of light — the same idea threaded through the hero, the diagrams, and the
icon language.

## Delivery tier
cinema — one Tier-1 mechanic (parallax rig) + motivated scroll reveals.

## Animation mode: non-animated
Animation mode: non-animated — user picked Non-animated at intake after the scroll-scrub film required a paid Higgsfield plan they declined to purchase.
User picked Non-animated after learning the scroll-scrub film (animated
website default) requires generated video, which needs a paid Higgsfield
plan; the user declined to upgrade. No scroll-scrub artifacts ship (the
scroll-scrub component and scroll-scrub-scenes.ts stay in the repo, unused
and unreferenced, per the template contract). The site still clears the
wow-maker craft floor via the Tier-1 technique below.

### Tier-1 technique (wow-catalog B1 — Cutout parallax rig)
Pairing: the journey/waypoints spine wants a sense of depth and travel: B1
gives the hero coin-and-chain subject true depth by layering a background
haze plate, a mid light-strand plate, and the foreground cutout subject at
different scroll/cursor rates, so the chain reads as floating in real space
without needing literal video.
- Layer 1 (back): generated atmospheric void plate.
- Layer 2 (mid): a second plate, offset, slower drift, screen-blended.
- Layer 3 (front): `remove_background` cutout of the winning hero image (a
  figure presenting a glowing chain of blocks).
Scroll moves the layers at different rates (foreground fastest); pointer
adds a small parallax tilt. Reduced motion: layers render at rest position,
fully static, no pin. Mobile: pointer parallax naturally absent (touch),
scroll parallax range reduced by the same rAF handler.

## Locked palette
- Background (ink navy): `#10142B`
- Panel (deep navy): `#171C3A`
- Ink (text, warm off-white): `#F3EFE4`
- Muted ink (secondary text): `#A8ACC6`
- Accent (single, locked): `#D9B76B` — antique gold, reads as "value/coin"
  against the navy void; not orange/amber/ember, not neon, not violet.
Defense: navy + gold is a ledger-and-coin pairing native to the subject
matter, and clears all five banned families (no graphite/near-black+amber, no
near-black+neon, no beige+brass, no AI-purple, no repeat of a prior build).

## Locked type
Display/UI: `Noto Sans JP` (clean geometric Gothic, weights 400/500/700/900) —
chosen over Outfit because all site copy is Japanese and Outfit has no CJK
glyphs; Noto Sans JP reads modern and confident, not a default-Inter tell.
Mono (kickers, figures, numerals): `IBM Plex Mono` for the Latin/numeral
ledger-readout voice. No serif; nothing here is heritage/editorial.

## Hero copy
Kicker: "信頼は、分散する。" Headline: "分散された信頼が、価値を動かす。"
Subtext: "ブロックチェーンと暗号通貨のしくみを、はじめから丁寧に。"

## Section plan (≥4 layout families, no consecutive repeats)
1. Hero — B1 parallax rig, nav, headline, CTA (asymmetric offset, NOT
   left-text/right-image default)
2. ブロックチェーンとは — editorial split, text left / generated diagram right
3. 暗号通貨とは — asymmetric offset, stat rail left / image right
4. 3つの原理（分散化・暗号技術・合意形成） — bento (3 uneven cells, icon-led)
5. 活用事例 — horizontal gallery cadence (4 cards: 送金 / 資産 / NFT / DeFi)
6. 安全に使うために — poster-stacked editorial, side-rail note
7. はじめの一歩 (footer/CTA) — banner close

Eyebrow budget: ceil(7/3) = 3. Used on: Hero, 3つの原理, 安全に使うために (3
total; ブロックチェーンとは / 暗号通貨とは / 活用事例 / footer carry none).

## Asset plan
- Reference boards: 1 storyboard-style pre-viz + 6 per-section boards
  (refs/, guidance only, not shipped).
- Hero kit: 2 hero candidates generated; winner cut out via
  `remove_background` (public/assets/hero/hero-subject.png); 2 atmospheric
  plates as the back/mid parallax layers; the unpicked hero candidate reused
  as the 暗号通貨とは section image (public/assets/sections/crypto.jpg).
- Icon set: 1 generated sheet, used as a low-opacity decorative texture
  (public/assets/texture/icon-motif.jpg); functional bento/gallery icons are
  hand-authored single-stroke SVGs in the accent color (dense small-glyph
  fallback per design-recipe.md §8, since the sheet's exact grid could not
  be verified without a vision pass in this session).
- Logo/monogram: 1 generated abstract chain-hex monogram (no user logo
  supplied) for nav + full favicon/head-kit source.
- Diagram imagery: 1 generated process plate for "ブロックチェーンとは".
- Head kit: favicon.ico/16/32, apple-touch-icon (opaque), 192/512 + 512
  maskable, site.webmanifest, theme-color — all derived from the monogram
  and wired into `src/routes/__root.tsx`.
- Launch cover/OG: composed locally (Pillow + Noto Sans JP, no Higgsfield
  wordmark or capsule — this is a `type: "website"` build, so the cover
  carries only the site's own brand) from the winning cover scene, at
  `public/assets/meta/og.png` (1200x630) and `.../cover.png` (1200x800).

## CTA inventory (bespoke, no shared button style)
- Nav "はじめる": text link, arrow travels along a drawn chain-link path.
- Hero "くわしく見る": circular coin badge that spins/unrolls on hover.
- Use-case cards "詳細": corner-bracket target that closes around the label.
- Security section "確認する": mono readout that decodes/types on hover.
- Footer "資料を読む": stamp/press — imprints (skew + scale) on :active.

## Previous build in this chat
None — first build this session.
