# Adlane Hamzaoui — Ingénieur logiciel & projets IT

Portfolio React / TypeScript / Vite. Dix projets regroupés en quatre parties (projet client, hackathons, projets annuels ESGI, projets personnels), chacun présenté avec le rôle tenu. Version française à la racine, version anglaise sous `/en` (bascule FR / EN dans l’en-tête).

```sh
npm ci
npm run dev
```

Validation : `npm run lint`, `npx tsc --noEmit -p tsconfig.app.json`, `npm run build`.

Les textes de l’interface sont dans `src/i18n.ts`, les projets dans `src/data/projects.ts`, les expériences et compétences dans `src/data/portfolioData.ts`, en français et en anglais. Chaque projet propose une lecture de son parcours et un lien vers le site ou le dépôt du projet. Il ne simule aucune action de ces applications.

L’interface respecte `prefers-reduced-motion`. La navigation entre projets et leurs étapes fonctionne avec des boutons accessibles au clavier et au toucher.

## Captures des projets

Trente-trois captures dans onze galeries, visibles dans la liste de projets. Navigation par miniatures, agrandissement, fermeture avec Échap et flèches clavier dans le dialogue. Les images WebP sont chargées à la demande. La provenance, les révisions et les limites des environnements locaux sont documentées dans [docs/project-captures.md](docs/project-captures.md). Les neuf vues Corso Motors ont été fournies par le propriétaire et l’adresse personnelle de la messagerie a été anonymisée ; le nom adlane reste visible dans Git.
