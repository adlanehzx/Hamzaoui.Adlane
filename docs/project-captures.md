# Project screenshots — 20 November 2026

Images actually captured from the interfaces of the cloned repositories, with no graphic modification. WebP compression for the portfolio. No call to a paid AI provider; no production data used.

| Project | Revision | Execution and screenshots |
| --- | --- | --- |
| Bastion | `db7c6d0c90671f40a65a92d6bf6e452f4954bf49` | Real output of `forge test` (24 unit and fuzz tests, 5 invariants) and of `scripts/e2e.sh` (local anvil chain, Rust keeper), displayed in a terminal frame. Architecture diagram drawn from the code, in French and English. |
| RugRadar | `78d9c51f5d8853a8bf33b0ac50216531ec810c19` | Local BNB chain (ganache, chain id 56) with Uniswap V2 and three test tokens from the repository. Real output of `rugradar watch`, `stats` and `check`. The Telegram alerts reuse the text produced by `format_alert` from these analyses, displayed in a Telegram-style interface: no real bot was used. |
| Comp Bike | `1efc1ac2542fc8e70d8b890f2f28131a83ef2d7e` | Local Next.js, home page and `/app` configuration. Demo data native to the frontend. Earlier screenshot restored from `a5896d3^` / the portfolio history. |
| Hackathon Michelin | `87f0031fcf549efa971f39d5772cfde86a5b9aa6` | Local Expo web export (`expo export -p web`), without a backend: route creation and profile screens, shown in a mobile frame. The search screen uses fictitious venues served by an API simulated in the browser. The native map is not available on web. |
| HankoTrack | `b7063e00b8ea6896488dabfcf0f53585747ca483` | Local Nuxt, home page and features. Frontend without an API; the figures and content of the public page come from the project's code. |
| Kanboard | `1b73c4bdaa6fb8ee108bea3aa641272985ff11d0` | Four screenshots published in the project's repository (board, board list, card, members), cropped to the portfolio format. |
| Nexus | `26ff42d9c946f5b58869a563a2054d1fce663070` | Vite dashboard and compiled internal dependencies. Login screen in French, dark theme. No backend started: the internal administrator views are not shown. |
| SORAVYN | `67a5b49cfe2f893a867343fe58f2086717b91963` | Real server and an isolated PostgreSQL 16. Company "Portfolio — Démonstration locale", no agent or campaign run. Initial dashboard and Campaign Studio. |
| Specto | `6945e13b9d10d806de2ad27abcbcc29ca178fa9b` | Local Next.js, home page and test overview. No AI test run; the marketing figures are part of the page source. |

Corso Motors: nine screenshots supplied by the owner (showcase site, range, login, hub, PLM, Git, documentation, Drive and mailbox). The personal address in the mailbox was replaced with service@corso-motors.com using ImageGen. The name adlane is kept in the Git screenshot, at the owner's request.

The visible captions are in `src/data/projectCaptures.ts`. The gallery uses a native dialog: closing with Escape, navigation with the left/right arrows and SVG buttons. Images are loaded on demand, with explicit dimensions.
