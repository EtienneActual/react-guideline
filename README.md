# React Guidelines Project

Un projet React moderne qui démontre les meilleures pratiques de développement avec une architecture robuste et des patterns avancés.

![React](https://img.shields.io/badge/React-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue)
![Vite](https://img.shields.io/badge/Vite-6.1.0-brightgreen)
![MUI](https://img.shields.io/badge/MUI-6.4.4-purple)

## 🚀 Technologies Principales

- **React** avec **TypeScript**
- **TanStack Router** pour le routing
- **TanStack Query** pour la gestion des données serveur
- **TanStack Table** pour les tableaux de données
- **TanStack Form** pour la gestion des formulaires
- **Material-UI (MUI)** pour l'interface utilisateur
- **DayJS** pour la gestion des dates
- **Zustand** pour la gestion d'état global

## 📁 Structure du Projet

```
src/
├── components/         # Composants réutilisables
│   ├── DataTable/     # Composant de tableau générique
│   ├── Form/          # Composants de formulaire
│   ├── Modal/         # Composants de modal
│   ├── Shared/        # Composants partagés (Error, Loading...)
│   └── Tables/        # Implémentations spécifiques des tableaux
├── data/
│   ├── config/        # Configurations (colonnes, routes...)
│   ├── contexts/      # Contextes React
│   ├── dto/           # Data Transfer Objects
│   ├── hooks/         # Hooks personnalisés
│   ├── interfaces/    # Interfaces TypeScript
│   ├── plugins/       # Plugins (dayjs...)
│   ├── schemas/       # Schémas de validation
│   ├── services/      # Services API
│   └── stores/        # Stores Zustand
├── pages/             # Composants de pages
└── routes/            # Configuration des routes
```

## 🌟 Fonctionnalités

### Gestion des Données

- Requêtes optimisées avec TanStack Query
- DTOs pour la transformation des données
- Interfaces TypeScript pour le typage strict
- Gestion des dates avec DayJS

### Interface Utilisateur

- Design System Material-UI
- Tableaux interactifs avec tri
- Formulaires avec validation
- Modales et composants réutilisables

### Architecture

- Error Boundaries pour la gestion des erreurs
- Suspense pour le chargement
- Architecture modulaire et maintenable
- Patterns React modernes

## 🛠 Installation

### Installation des dépendances

npm install

### Lancement en développement

npm run dev

## 🔧 Configuration

1. Créez un fichier \`.env\` à la racine du projet :
   \`\`\`env
   VITE_COIN_GECKO_BASE_URL=https://api.coingecko.com/api/v3
   VITE_STAR_WARS_BASE_URL=https://swapi-graphql.netlify.app/graphql
   \`\`\`

## 📚 Patterns et Bonnes Pratiques

### Gestion des Erreurs

- Error Boundaries pour capturer les erreurs React
- AsyncBoundary pour combiner ErrorBoundary et Suspense
- Validation des données avec des schémas

### Gestion des États

- Zustand pour l'état global
- React Query pour l'état serveur
- Context pour les thèmes et configurations

### Performance

- Suspense pour le chargement
- Mise en cache des requêtes
- Optimisations des re-rendus

## 📝 Conventions de Code

- ESLint pour le linting
- Prettier pour le formatage
