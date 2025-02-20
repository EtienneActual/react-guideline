# React Guidelines Project

Un projet React moderne démontrant les meilleures pratiques de développement front-end avec une architecture robuste.

[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1.0-brightgreen)](https://vitejs.dev/)
[![MUI](https://img.shields.io/badge/MUI-6.4.4-purple)](https://mui.com/)
[![Code Style: Prettier](https://img.shields.io/badge/Code_Style-Prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## 📖 Table des Matières

- [React Guidelines Project](#react-guidelines-project)
  - [📖 Table des Matières](#-table-des-matières)
  - [Vue d'ensemble](#vue-densemble)
  - [🛠 Technologies](#-technologies)
  - [🏗 Architecture](#-architecture)
  - [🌟 Fonctionnalités](#-fonctionnalités)
  - [🚀 Installation](#-installation)
  - [⚙️ Configuration](#️-configuration)
  - [💻 Développement](#-développement)
    - [Scripts Disponibles](#scripts-disponibles)
    - [Conventions de Code](#conventions-de-code)
  - [📚 Bonnes Pratiques](#-bonnes-pratiques)
  - [📝 License](#-license)

## Vue d'ensemble

Ce projet est une démonstration d'une application React moderne, intégrant les meilleures pratiques de développement et une architecture scalable.

## 🛠 Technologies

- **React 19** - Framework UI
- **TypeScript 5.7** - Typage statique
- **Vite 6** - Build tool moderne
- **Material-UI 6.4** - Composants UI
- **Emotion** - CSS-in-JS
- **TanStack Suite** - Comprend plusieurs bibliothèques puissantes :
  - **TanStack Form** : Gestion des formulaires avec un typage sûr, facilitant la validation et la gestion des données de formulaire.
  - **TanStack Table** : Permet de créer des tables de données puissantes et flexibles, avec des fonctionnalités avancées comme le tri, le filtrage et la pagination.
  - **TanStack Router** : Fournit un routage performant et type-safe, simplifiant la navigation dans l'application.
- **Zustand** - Gestion d'état
- **Socket.IO** - Communication temps réel
- **Zod** - Validation de schémas

## 🏗 Architecture

```
src/
├── components/          # Composants réutilisables
├── data/                # Gestion des données
├── pages/               # Composants de pages
└── routes/              # Configuration du routing
```

## 🌟 Fonctionnalités

- **Gestion des Données**

  - État global avec Zustand
  - Requêtes serveur avec TanStack Query
  - Communication temps réel avec Socket.IO

- **Interface Utilisateur**
  - Composants MUI personnalisés
  - Thème clair/sombre avec Context

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

## 📚 Bonnes Pratiques

- **TypeScript**

  - Types stricts activés
  - Interfaces et DTO pour les modèles de données

- **React**
  - Composants fonctionnels
  - Hooks personnalisés

## 📝 License

MIT © [EtienneActual]
