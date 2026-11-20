# Adlane Hamzaoui — Full-Stack & IA

Portfolio React / TypeScript / Vite, organisé en deux profils : Développement web et IA & agents. Le contenu est issu des deux CV fournis en novembre 2026. Les PDF originaux sont disponibles sous `public/cv-web.pdf` et `public/cv-ia.pdf`.

```sh
npm ci
npm run dev
```

Validation : `npm run lint`, `npx tsc --noEmit -p tsconfig.app.json`, `npm run build`.

Les projets et leurs liens sont définis dans `src/App.tsx`. Les expériences, coordonnées et compétences se trouvent dans `src/data/portfolioData.ts`. Le sélecteur de profil réinitialise le projet ouvert. Chaque projet propose une lecture de son parcours et un lien vers le site ou dépôt mentionné dans le CV. Il ne simule aucune action de ces applications.

L’interface respecte `prefers-reduced-motion`. La navigation entre projets et leurs étapes fonctionne avec des boutons accessibles au clavier et au toucher.

## Captures des projets

Dix captures réelles dans cinq galeries, visibles dans la liste de projets. Navigation par miniatures, agrandissement, fermeture avec Échap et flèches clavier dans le dialogue. Les images WebP sont chargées à la demande. La provenance, les révisions et les limites des environnements locaux sont documentées dans [docs/project-captures.md](docs/project-captures.md). Corso Motors attend les éléments du propriétaire.
