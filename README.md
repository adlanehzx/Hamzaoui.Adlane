# Adlane Hamzaoui's Portfolio

React / TypeScript / Vite portfolio. Ten projects grouped into four sections (client project, hackathons, ESGI final-year projects, personal projects), presented as cards. Each card opens a page with the description, the role played, the stack, screenshots and a link to the code or the site, reachable directly through an anchor (for example `#bastion`). French version at the root, English version under `/en` (FR / EN switch in the header).

```sh
npm ci
npm run dev
```

Validation: `npm run lint`, `npx tsc --noEmit -p tsconfig.app.json`, `npm run build`.

The interface texts are in `src/i18n.ts`, the projects in `src/data/projects.ts`, and the experience and skills in `src/data/portfolioData.ts`, in French and English.
The interface respects `prefers-reduced-motion`. Project pages use a native dialog (closes with Escape) and navigation works with keyboard as well as touch.

## Project screenshots

Thirty-three screenshots in eleven galleries, visible on each project's page. Thumbnail navigation, zoom, closing with Escape and keyboard arrows in the dialog. WebP images are loaded on demand. The provenance, revisions and limits of the local environments are documented in [docs/project-captures.md](docs/project-captures.md). The nine Corso Motors views were supplied by the owner and the personal mailbox address was anonymized; the name adlane remains visible in Git.
