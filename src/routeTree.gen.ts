/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as StarWarsImport } from './routes/star-wars'
import { Route as SocketImport } from './routes/socket'
import { Route as FormDemoImport } from './routes/form-demo'
import { Route as CoinsImport } from './routes/coins'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const StarWarsRoute = StarWarsImport.update({
  id: '/star-wars',
  path: '/star-wars',
  getParentRoute: () => rootRoute,
} as any)

const SocketRoute = SocketImport.update({
  id: '/socket',
  path: '/socket',
  getParentRoute: () => rootRoute,
} as any)

const FormDemoRoute = FormDemoImport.update({
  id: '/form-demo',
  path: '/form-demo',
  getParentRoute: () => rootRoute,
} as any)

const CoinsRoute = CoinsImport.update({
  id: '/coins',
  path: '/coins',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/coins': {
      id: '/coins'
      path: '/coins'
      fullPath: '/coins'
      preLoaderRoute: typeof CoinsImport
      parentRoute: typeof rootRoute
    }
    '/form-demo': {
      id: '/form-demo'
      path: '/form-demo'
      fullPath: '/form-demo'
      preLoaderRoute: typeof FormDemoImport
      parentRoute: typeof rootRoute
    }
    '/socket': {
      id: '/socket'
      path: '/socket'
      fullPath: '/socket'
      preLoaderRoute: typeof SocketImport
      parentRoute: typeof rootRoute
    }
    '/star-wars': {
      id: '/star-wars'
      path: '/star-wars'
      fullPath: '/star-wars'
      preLoaderRoute: typeof StarWarsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/coins': typeof CoinsRoute
  '/form-demo': typeof FormDemoRoute
  '/socket': typeof SocketRoute
  '/star-wars': typeof StarWarsRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/coins': typeof CoinsRoute
  '/form-demo': typeof FormDemoRoute
  '/socket': typeof SocketRoute
  '/star-wars': typeof StarWarsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/coins': typeof CoinsRoute
  '/form-demo': typeof FormDemoRoute
  '/socket': typeof SocketRoute
  '/star-wars': typeof StarWarsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/coins' | '/form-demo' | '/socket' | '/star-wars'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/coins' | '/form-demo' | '/socket' | '/star-wars'
  id: '__root__' | '/' | '/coins' | '/form-demo' | '/socket' | '/star-wars'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CoinsRoute: typeof CoinsRoute
  FormDemoRoute: typeof FormDemoRoute
  SocketRoute: typeof SocketRoute
  StarWarsRoute: typeof StarWarsRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CoinsRoute: CoinsRoute,
  FormDemoRoute: FormDemoRoute,
  SocketRoute: SocketRoute,
  StarWarsRoute: StarWarsRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/coins",
        "/form-demo",
        "/socket",
        "/star-wars"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/coins": {
      "filePath": "coins.tsx"
    },
    "/form-demo": {
      "filePath": "form-demo.tsx"
    },
    "/socket": {
      "filePath": "socket.tsx"
    },
    "/star-wars": {
      "filePath": "star-wars.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
