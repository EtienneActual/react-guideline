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

### 🔄 Gestion des Données et État

- **Gestion d'État**

  - État global avec Zustand
  - État serveur avec React Query
  - Gestion du thème avec Context API

- **Communication Serveur**

  - Requêtes REST avec CoinGecko API
  - Requêtes GraphQL avec Star Wars API
  - Rafraîchissement automatique des données (CoinGecko)
  - Chat temps réel avec Socket.IO

- **Transformation des Données**
  - Pattern DTO pour la normalisation
  - Validation des formulaires avec Zod
  - Typage strict avec TypeScript

### 🎨 Interface Utilisateur

- **Composants**

  - Tables de données (TanStack Table)
  - Formulaire de login avec validation
  - Modales réutilisables
  - Composants de chargement et d'erreur

- **Thème**

  - Support clair/sombre
  - Composants MUI personnalisés

### 🏗 Architecture et Patterns

- **Gestion des Erreurs**

  - Error Boundaries par feature
  - AsyncBoundary (Error + Suspense)
  - Fallbacks de chargement

- **Performance**

  - Suspense pour le chargement
  - Gestion du cache avec React Query

## 🛠 Installation

```bash
# Installation des dépendances
npm install

# Lancement en développement
npm run dev
```

## 🔧 Configuration

1. Créez un fichier `.env` à la racine du projet :

```env
VITE_COIN_GECKO_BASE_URL=https://api.coingecko.com/api/v3
VITE_STAR_WARS_BASE_URL=https://swapi-graphql.netlify.app/graphql
```

## 📝 Conventions de Code

- ESLint pour le linting
- Prettier pour le formatage
