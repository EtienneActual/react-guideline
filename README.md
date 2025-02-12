# Crypto Market Tracker

Une application React moderne pour suivre les prix des cryptomonnaies en temps réel, construite avec les meilleures pratiques et technologies actuelles.

![React](https://img.shields.io/badge/React-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue)
![Vite](https://img.shields.io/badge/Vite-6.1.0-brightgreen)
![MUI](https://img.shields.io/badge/MUI-6.4.4-purple)

## 🚀 Fonctionnalités

- ✨ Interface utilisateur moderne avec Material-UI
- 🌓 Mode sombre/clair
- 📊 Tableau de bord des cryptomonnaies en temps réel
- 🔄 Actualisation automatique des données toutes les 30 secondes
- 📱 Design responsive
- 🎯 Gestion d'état optimisée avec React Query et Zustand

## 🛠️ Technologies Utilisées

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **UI Framework**: Material-UI (MUI)
- **State Management**:
  - TanStack Query (React Query) pour la gestion des données serveur
  - Zustand pour la gestion de l'état global
- **API**: CoinGecko
- **Styling**: Emotion (CSS-in-JS)
- **Form Validation**: Zod
- **Code Quality**:
  - ESLint
  - Prettier
  - TypeScript strict mode

## 🌟 Pourquoi TanStack ?

TanStack fournit une suite d'outils modernes et performants pour React, particulièrement utiles dans ce projet :

### TanStack Query (React Query)

- 🔄 **Gestion du Cache Intelligente** : Mise en cache automatique des données avec invalidation intelligente
- 🎯 **Synchronisation en Temps Réel** : Actualisation automatique des données avec `refetchInterval`
- 🔍 **État de Chargement** : Gestion simplifiée des états loading/error/success
- 📊 **Dé-duplication des Requêtes** : Évite les requêtes en double pour optimiser les performances

```typescript
// Exemple d'utilisation dans notre hook useCoins
export const useCoins = () => {
  return useQuery<Coin[]>({
    queryKey: ['coins'],
    queryFn: getCoins,
    refetchInterval: 30000, // Rafraîchissement automatique
    staleTime: 10000, // Gestion du cache
  });
};
```

### TanStack Table

- 📋 **Tri et Filtrage** : Fonctionnalités avancées de tri et filtrage intégrées
- 🎨 **Personnalisation** : API flexible pour un style personnalisé avec Material-UI
- 📱 **Responsive** : Gestion optimale des tableaux sur tous les appareils
- 🔧 **Type-safe** : Totalement typé avec TypeScript pour une meilleure maintenabilité

```typescript
// Exemple de configuration de colonne avec TanStack Table
columnHelper.accessor('price_change_percentage_24h', {
  header: '24h %',
  cell: (info) => {
    const value = info.getValue();
    const color = value >= 0 ? 'success.main' : 'error.main';
    return <Typography color={color}>{value?.toFixed(2)}%</Typography>;
  },
})
```

### TanStack Form (Bonus)

- 🎯 **Validation Type-safe** : Intégration parfaite avec Zod
- 🔄 **Performance** : Rendu optimisé et mise à jour efficace des champs
- 🎨 **Flexible** : S'adapte à tous les composants UI
- 📝 **Gestion d'État** : État du formulaire centralisé et performant

Ces outils TanStack offrent :

- 📈 Une meilleure performance globale de l'application
- 🛠️ Une maintenance facilitée grâce au typage fort
- 💻 Une expérience développeur (DX) améliorée
- 🔧 Une architecture scalable et robuste

## 📦 Installation

1. Clonez le repository

```bash
git clone [votre-repo-url]
cd react-guideline
```

2. Installez les dépendances

```bash
npm install
```

3. Configurez les variables d'environnement

```bash
cp .env.example .env
```

Remplissez les variables nécessaires dans le fichier `.env`:

```
VITE_COIN_GECKO_BASE_URL='https://api.coingecko.com/api/v3'
```

4. Lancez l'application en mode développement

```bash
npm run dev
```

## 📝 Scripts Disponibles

- `npm run dev` - Lance l'application en mode développement
- `npm run build` - Compile l'application pour la production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run preview` - Prévisualise la version de production localement

## 🏗️ Structure du Projet

```
src/
├── components/      # Composants React réutilisables
├── contexts/        # Contextes React (ex: ThemeContext)
├── data/
│   ├── hooks/      # Custom hooks
│   ├── interfaces/ # TypeScript interfaces
│   ├── schemas/    # Schémas de validation Zod
│   └── services/   # Services API
├── stores/         # Stores Zustand
└── App.tsx         # Composant racine
```

## 🔧 Configuration

Le projet utilise plusieurs fichiers de configuration :

- `vite.config.ts` - Configuration de Vite
- `tsconfig.json` - Configuration TypeScript
- `.eslintrc.js` - Configuration ESLint
- `.prettierrc.js` - Configuration Prettier

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou soumettre une pull request.

## 📄 Licence

Ce projet est sous licence MIT.
