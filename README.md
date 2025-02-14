# React Guidelines Project

Un projet React moderne démontrant les meilleures pratiques de développement front-end avec une architecture robuste et des patterns avancés.

[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1.0-brightgreen)](https://vitejs.dev/)
[![MUI](https://img.shields.io/badge/MUI-6.4.4-purple)](https://mui.com/)
[![TanStack](https://img.shields.io/badge/TanStack-Suite-orange)](https://tanstack.com/)
[![Code Style: Prettier](https://img.shields.io/badge/Code_Style-Prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## 📖 Table des Matières

- [React Guidelines Project](#react-guidelines-project)
  - [📖 Table des Matières](#-table-des-matières)
  - [Vue d'ensemble](#vue-densemble)
  - [🛠 Technologies](#-technologies)
    - [Core](#core)
    - [TanStack Suite](#tanstack-suite)
    - [UI \& Styling](#ui--styling)
    - [State Management \& Data](#state-management--data)
    - [Developer Experience](#developer-experience)
  - [🏗 Architecture](#-architecture)
  - [🌟 Fonctionnalités](#-fonctionnalités)
    - [Gestion des Données](#gestion-des-données)
    - [Interface Utilisateur](#interface-utilisateur)
    - [Performance \& Fiabilité](#performance--fiabilité)
  - [🚀 Installation](#-installation)
  - [⚙️ Configuration](#️-configuration)
  - [💻 Développement](#-développement)
    - [Scripts Disponibles](#scripts-disponibles)
    - [Conventions de Code](#conventions-de-code)
  - [📚 Bonnes Pratiques](#-bonnes-pratiques)
  - [📝 License](#-license)

## Vue d'ensemble

Ce projet est une démonstration complète d'une application React moderne, intégrant les meilleures pratiques de développement et une architecture scalable. Il met en œuvre une suite d'outils TanStack pour une gestion efficace des données et une expérience utilisateur optimale.

## 🛠 Technologies

### Core

- **React 19** - Framework UI avec support des Hooks et du Concurrent Mode
- **TypeScript 5.7** - Typage statique et dernières fonctionnalités ECMAScript
- **Vite 6** - Build tool ultra-rapide et moderne

### TanStack Suite

- **TanStack Router** - Routing type-safe et performant
- **TanStack Query** - Gestion sophistiquée du state serveur
- **TanStack Table** - Tables de données puissantes et flexibles
- **TanStack Form** - Gestion des formulaires type-safe

### UI & Styling

- **Material-UI 6.4** - Composants UI modernes et personnalisables
- **Emotion** - CSS-in-JS pour un styling flexible

### State Management & Data

- **Zustand** - Gestion d'état global simple et performante
- **Socket.IO** - Communication temps réel
- **Zod** - Validation de schémas type-safe

### Developer Experience

- **ESLint** - Linting avec configuration moderne
- **Prettier** - Formatage de code consistant
- **TypeScript ESLint** - Règles de linting spécifiques à TypeScript

## 🏗 Architecture

```
src/
├── components/          # Composants réutilisables
│   ├── Form/           # Composants de formulaire
│   ├── Modal/          # Système de modales
│   ├── Shared/         # Composants partagés
│   └── Tables/         # Implémentations des tableaux
├── data/
│   ├── contexts/       # Contextes React
│   ├── dto/            # Data Transfer Objects
│   ├── hooks/          # Custom hooks
│   ├── interfaces/     # TypeScript interfaces
│   ├── schemas/        # Schémas de validation Zod
│   ├── services/       # Services API
│   └── stores/         # Stores Zustand
├── pages/              # Composants de pages
└── routes/             # Configuration du routing
```

## 🌟 Fonctionnalités

### Gestion des Données

- **État Global & Serveur**

  - Gestion d'état avec Zustand
  - Cache et synchronisation avec TanStack Query
  - Temps réel via Socket.IO

- **Intégrations API**
  - REST (CoinGecko API)
  - GraphQL (Star Wars API)
  - WebSocket pour les mises à jour en temps réel

### Interface Utilisateur

- **Composants Avancés**

  - Tables de données interactives
  - Système de formulaires validés
  - Modales réutilisables
  - Gestion des erreurs et du chargement

- **Thème & Style**
  - Support thème clair/sombre
  - Composants MUI personnalisés
  - Design system cohérent

### Performance & Fiabilité

- **Optimisations**

  - React Suspense pour le chargement
  - Gestion optimisée du cache
  - Code splitting automatique

- **Gestion des Erreurs**
  - Error Boundaries par feature
  - AsyncBoundary (Error + Suspense)
  - Fallbacks élégants

## 🚀 Installation

```bash
# Installation des dépendances
npm install

# Lancement en développement
npm run dev

# Build production
npm run build

# Preview du build
npm run preview
```

## ⚙️ Configuration

1. Créez un fichier `.env` à la racine :

```env
VITE_COIN_GECKO_BASE_URL=https://api.coingecko.com/api/v3
VITE_STAR_WARS_BASE_URL=https://swapi-graphql.netlify.app/graphql
```

## 💻 Développement

### Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée le build production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run preview` - Preview du build production

### Conventions de Code

- Utilisation stricte de TypeScript
- ESLint pour le linting
- Prettier pour le formatage
- Commits conventionnels

## 📚 Bonnes Pratiques

- **TypeScript**

  - Types stricts activés
  - Interfaces pour les modèles de données
  - DTOs pour la transformation des données

- **React**

  - Hooks personnalisés pour la logique réutilisable
  - Composants fonctionnels
  - Gestion appropriée des effets secondaires

- **Performance**
  - Mémoisation appropriée
  - Chargement différé des composants
  - Optimisation des re-renders

## 📝 License

MIT © [EtienneActual]
