# Adlane Hamzaoui — Interfaces & systèmes

Portfolio React / TypeScript / Vite. Une matière argentée se déplie pour révéler trois projets et leurs démonstrations interactives.

## Développement

```sh
npm ci
npm run dev
```

## Vérification

```sh
npm run lint
npx tsc --noEmit -p tsconfig.app.json
npm run build
```

L’interface propose un billet réversible, une capture à révéler avec un curseur et une tâche Kanban déplaçable, également utilisable au clavier par activation du bouton. Les gestes restent facultatifs : les projets sont accessibles par boutons. Les animations respectent `prefers-reduced-motion`.

Les démonstrations sont identifiées comme telles et ne sont pas connectées aux applications présentées. Le contact utilise un lien email. Le CV provient de `public/resume.pdf` ; le parcours et les coordonnées proviennent de `src/data/portfolioData.ts` et doivent être tenus à jour.

Contrôles d’interaction exécutés avec Chromium à 1440, 390 et 320 px : ouverture/repli, billet, sélection des projets, curseur, aperçu, déplacement de tâche par activation et absence de débordement horizontal.
