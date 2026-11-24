# Captures des projets — 20 novembre 2026

Images réellement capturées depuis les interfaces des dépôts clonés, sans modification graphique. Compression WebP pour le portfolio. Aucun appel à un fournisseur IA payant ; aucune donnée de production utilisée.

| Projet | Révision | Exécution et captures |
| --- | --- | --- |
| Comp Bike | `1efc1ac2542fc8e70d8b890f2f28131a83ef2d7e` | Next.js local, accueil et configuration `/app`. Données de démonstration natives du frontend. Ancienne capture restaurée depuis `a5896d3^` / historique du portfolio. |
| Hackathon Michelin | `87f0031fcf549efa971f39d5772cfde86a5b9aa6` | Export web Expo local (`expo export -p web`), sans backend : écrans de création de parcours et de profil, présentés dans un cadre mobile. La carte native n’est pas disponible sur web. |
| HankoTrack | `b7063e00b8ea6896488dabfcf0f53585747ca483` | Nuxt local, accueil et fonctionnalités. Frontend sans API ; les chiffres et contenus de la page publique proviennent du code du projet. |
| Nexus | `26ff42d9c946f5b58869a563a2054d1fce663070` | Dashboard Vite et dépendances internes compilées. Connexion en français, thème sombre. Pas de backend lancé : les vues administrateur internes ne sont pas présentées. |
| SORAVYN | `67a5b49cfe2f893a867343fe58f2086717b91963` | Serveur réel et PostgreSQL 16 isolé. Société « Portfolio — Démonstration locale », aucun agent ni campagne exécuté. Dashboard initial et Campaign Studio. |
| Specto | `6945e13b9d10d806de2ad27abcbcc29ca178fa9b` | Next.js local, accueil et présentation des tests. Aucun test IA lancé ; les chiffres marketing font partie de la page source. |

Corso Motors : neuf captures fournies par le propriétaire (site vitrine, gamme, connexion, hub, PLM, Git, documentation, Drive et messagerie). L’adresse personnelle dans la messagerie a été remplacée par service@corso-motors.com avec ImageGen. Le nom adlane est conservé dans la capture Git, à la demande du propriétaire.

Les légendes visibles sont dans `src/data/projectCaptures.ts`. La galerie utilise un dialogue natif : fermeture avec Échap, navigation avec les flèches gauche/droite et boutons SVG. Images chargées à la demande, avec dimensions explicites.
