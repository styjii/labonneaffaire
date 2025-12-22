# La Bonne Affaire

Un projet Angular pour découvrir et gérer des articles avec fonctionnalités interactives.

## Description

Cette application Angular permet d'afficher une liste d'articles, de consulter leurs détails, et d'interagir avec eux via un système de likes/dislikes. L'interface est responsive et utilise Bootstrap pour le styling.

## Fonctionnalités

- ✅ Affichage d'une liste d'articles en grille responsive
- ✅ Consultation des détails d'un article
- ✅ Système de likes/dislikes avec compteur
- ✅ Messages d'alerte dynamiques lors des interactions
- ✅ Commentaires sur les articles
- ✅ Indicateur de disponibilité des articles
- ✅ Navigation entre les pages

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- [npm](https://www.npmjs.com/) (inclus avec Node.js)
- [Angular CLI](https://angular.io/cli) (version 17 ou supérieure)

```bash
npm install -g @angular/cli
```

## Installation

1. Clonez le repository :
```bash
git clone <url-du-repository>
cd labonneaffaire
```

2. Installez les dépendances :
```bash
npm install
```

## Utilisation

### Développement

Pour lancer l'application en mode développement :

```bash
npm start
```

L'application sera accessible sur `http://localhost:4200`.

### Build

Pour construire l'application pour la production :

```bash
npm run build
```

Les fichiers de build seront générés dans le dossier `dist/`.

### Tests

Pour exécuter les tests unitaires :

```bash
npm test
```

## Structure du projet

```
src/
├── app/
│   ├── components/
│   │   ├── article/          # Composant article individuel
│   │   ├── details/          # Page de détails d'un article
│   │   ├── list-articles/    # Liste des articles
│   │   └── page-not-found/   # Page 404
│   ├── data.ts               # Données mockées des articles
│   ├── app.config.ts         # Configuration de l'application
│   ├── app.routes.ts         # Routes de l'application
│   └── app.ts                # Composant principal
├── assets/                   # Ressources statiques
├── index.html                # Template HTML principal
└── styles.css                # Styles globaux
```

## Technologies utilisées

- **Angular 17+** : Framework principal
- **TypeScript** : Langage de programmation
- **Bootstrap 5** : Framework CSS pour le responsive design
- **RxJS** : Programmation réactive

## Scripts disponibles

- `npm start` : Lance le serveur de développement
- `npm run build` : Construit l'application pour la production
- `npm test` : Exécute les tests unitaires
- `npm run lint` : Vérifie le code avec ESLint

## Contribution

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commitez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Pushez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## Auteur

Développé dans le cadre d'un apprentissage Angular.
