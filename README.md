# FNE Sage

Application sécurisée pour convertir des factures normalisées électroniques (FNE) ivoiriennes en fichier texte importable dans Sage 100 Gestion commerciale.

## Application en ligne

https://franckguihikonhi-sketch.github.io/FNE-SAGE/

## Fonctionnalités

- création de compte et connexion Supabase ;
- stockage privé des PDF par entreprise ;
- lecture de plusieurs PDF et de plusieurs factures ;
- gestion distincte des factures et des avoirs ;
- extraction des références, désignations, prix, quantités, unités et taxes ;
- écran de vérification entièrement modifiable ;
- correspondances clients et taxes Sage ;
- sauvegarde des factures et des lignes ;
- historique des exports ;
- génération Windows-1252 du fichier `IMPORT_SAGE.txt` ;
- champ Collaborateur vide ;
- construction automatique d'un exécutable Windows portable.

## Déploiement web

Le dépôt est servi par GitHub Pages depuis la branche `main`. Après une modification de `index.html`, attendre la fin du déploiement Pages puis ouvrir l'adresse de l'application.

## Générer le fichier Windows `.exe`

1. Ouvrir l'onglet **Actions** du dépôt GitHub.
2. Choisir **Construire l'application Windows**.
3. Cliquer sur **Run workflow**.
4. À la fin du traitement, télécharger l'artefact **FNE-Sage-Windows**.

L'artefact contient `FNE-Sage-1.0.0-x64.exe`, utilisable directement sans installation. L'application Windows utilise la même base Supabase et la même version web.

## Développement local Windows

Prérequis : Node.js 22.

```powershell
npm install
npm start
```

Pour construire les exécutables :

```powershell
npm run build:windows
```

Les fichiers sont produits dans `dist/`.

## Sécurité

La clé intégrée au navigateur est une clé Supabase publiable. Elle ne donne pas de privilèges administrateur. Les tables et le stockage sont protégés par RLS : chaque utilisateur n'accède qu'aux données de son entreprise.

