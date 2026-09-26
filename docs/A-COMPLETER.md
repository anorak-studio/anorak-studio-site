# À compléter

Les pastilles « À compléter » restent visibles tant que `showTodo: true` dans `src/data/site.ts` (à mettre à `false` avant la mise en ligne).

## Urgences Rurales 360  
`src/content/projets/urgences-rurales-360.md`
- [ ] Reprendre les photos (signées Mathieu Fortin) et les textes de medecineurgence.ca/ur360 : le site bloque les robots, envoie-les-moi
- [ ] Extraits vidéo

## The Unearthly Notes  
`src/content/projets/the-unearthly-notes.md`
- [ ] Affiche et images des 3 épisodes (sur tv1.bell.ca : je ne peux pas les télécharger d'ici, envoie-les-moi)
- [ ] Bande-annonce (lien YouTube ou Vimeo)
- [ ] Image pour le carrousel
- [ ] Sélections en festivals

## The Parrot, The Plant, The Writer (épisodes individuels)  
`src/content/projets/the-parrot.md`, `the-plant.md`, `the-writer.md`
- [x] Affiche et images de The Writer (11 photos + affiche)
- [x] Affiche et 2 écrans-titres de The Plant
- [x] Affiche et 2 écrans-titres de The Parrot
- [ ] Bande-annonce de chaque épisode (lien YouTube ou Vimeo)
- Note : quelques images reçues n'ont pas été utilisées pour éviter les doublons dans les détails (le lit vide et l'écran-titre de l'escalier sans/avec crédits pour The Writer, qui reprennent la même photo déjà utilisée) — seuls les écrans-titres avec les noms des interprètes ont été retenus, comme demandé.
- Ces 3 fichiers remplacent « The Unearthly Notes » dans la section Réalisation seulement ; la fiche groupée reste dans « Projets récents » et dans la liste complète des projets.

## ABKT  
`src/content/projets/abkt.md`
- [ ] Titre complet et synopsis
- [ ] Image principale et image pour le carrousel
- [ ] Partenaires et date de sortie prévue

## Art Robots  
`src/content/projets/art-robots.md`
- [ ] Bande-annonce ou extrait
- [ ] Autres prix et sélections
- [ ] Images du film

## La Mue  
`src/content/projets/la-mue.md`
- [ ] Synopsis
- [ ] Durée et crédits
- [ ] Bande-annonce

## Doomed Raiders  
`src/content/projets/doomed-raiders.md`
- [ ] Pitch du jeu et captures d'écran
- [ ] Lien vers le site Doomed Raiders

## Hub d'innovation en médecine rurale  
`src/content/projets/hub-innovation-medecine-rurale.md`
- [ ] Image principale et logo du Hub (le site bloque les robots : envoie-les-moi)
- [ ] Texte du projet

## Living Lab Charlevoix  
`src/content/projets/living-lab-charlevoix.md`
- [ ] Logo et images (le site bloque les robots : envoie-les-moi)
- [ ] Texte du projet

## Datagotchi (projet général)  
`src/content/projets/datagotchi.md`
- [x] Rédaction à jour, avec liens vers datagotchi.com, le Défi Datagotchi et Prof. Datagotchi
- [ ] Captures de l'application, du logo et de l'image de marque
- [ ] Préciser l'étendue du mandat Anorak Studio

## Défi Datagotchi (nouveau fichier, pour la section Gamification)  
`src/content/projets/defi-datagotchi.md`
- [x] Fiche créée à partir de quebec.datagotchi.com — remplace « Datagotchi » dans la section Gamification (le fichier groupé « Datagotchi » reste dans Projets récents et la liste complète)
- [ ] Captures de l'application et des illustrations
- [ ] Préciser l'étendue du mandat Anorak Studio (illustration, IA, pixel art)

## Prof. Datagotchi  
`src/content/projets/prof-datagotchi.md`
- [x] Lien officiel ajouté (prof-datagotchi.com)
- [ ] Rôle précis d'Anorak Studio

## Fungus Forest  
`src/content/projets/fungus-forest.md`
- [x] Rédaction à jour à partir de la page itch.io officielle (mooonbit.itch.io/fungus-forest)
- [ ] Images du jeu (dans le dossier Doomed Raiders)

## Havrio  
`src/content/projets/havrio.md`
- [ ] Tout : client, mandat, texte et images

## La Butinerie  
`src/content/projets/la-butinerie.md`
- [ ] Texte du projet
- [ ] Images du logo et de l'emballage

## Student Portfolio, Kativik Ilisarnilirinia  
`src/content/projets/portfolio-etudiant-kativik.md`
- [ ] Texte du projet et nature du mandat (imprimé, web?)
- [ ] Images

## Wooders  
`src/content/projets/wooders.md`
- [ ] Photos des vêtements et illustrations
- [ ] Boutique : afficher les gilets sur l'accueil (Shopify)

## CMS (édition depuis le navigateur)
- [ ] Mettre le vrai `repo:` (ex. `mfortin/anorak-studio-site`) dans `public/admin/config.yml` une fois le dépôt GitHub créé
- [ ] Brancher la connexion GitHub pour Decap CMS (petite fonction Cloudflare Pages/Worker — je peux la faire dès que le dépôt existe)

## Général
- [x] Date de fondation corrigée : 2010 (2010-02-01), et non 2007, partout sur le site (`since`/`sinceDate` dans `src/data/site.ts`)
- [x] Carrousel : le texte d'Urgences Rurales 360 est repassé en position standard (bas), comme les autres diapositives. Toutes les diapositives mènent déjà à la page projet/service correspondante au clic.
- [ ] Lien de la bande-démo drone : `droneReel` dans `src/data/site.ts`
- [ ] Média vedette de la Réalisation (vidéo) : `realisation.featured` dans `src/data/site.ts`
- [ ] Média vedette de Gamification et Indie Game : `gamification.featured` (reprend pour l'instant l'image Doomed Raiders du carrousel — à remplacer si tu préfères autre chose)
- [ ] Photo ou vidéo d'accueil en plus haute résolution (l'actuelle fait 1024 px de large) : `hero` dans `src/data/site.ts`
- [ ] Image du service « Conseil stratégique » : `image` dans le service `conseil-strategique` de `src/data/site.ts`
- [ ] Visuel des 5 étapes du design thinking (l'espace est prêt sur la page Services, sous forme de pastilles en attendant)
- [ ] 6e projet de « Projets récents » : j'ai choisi le Hub d'innovation en médecine rurale pour compléter la sélection (Urgences Rurales 360, The Unearthly Notes, Art Robots, Doomed Raiders, Datagotchi) — dis-moi si tu préfères un autre projet
- [ ] Projets à identifier avec le tag IA : ajouter `ai: true` dans leur fichier
- [ ] Relire tous les textes (accueil, services, réalisation, gamification, contact)
- [ ] Version anglaise
- [ ] Boutique : voir docs/boutique-plan.md
