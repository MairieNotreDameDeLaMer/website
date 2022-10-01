import { Route } from '../components/Routes'

export const topRoutes: Route[] = [
  {
    path: '/',
    uri: '/',
    label: 'Accueil',
  },
  {
    path: '/municipalite/*',
    uri: '/municipalite/mot-du-maire',
    label: 'Municipalité',
  },
  {
    path: '/enfance-jeunesse/*',
    uri: '/enfance-jeunesse/ecole',
    label: 'Enfance et Jeunesse',
  },
  {
    path: '/social/*',
    uri: '/social/demarches-administratives',
    label: 'Social',
  },
  {
    path: '/quotidien/*',
    uri: '/quotidien/village',
    label: 'Quotidien',
  },
  {
    path: '/bibliotheque/*',
    uri: '/bibliotheque',
    label: 'Bibliothèque',
  },
]

export const municipaliteRoutes: Route[] = [
  {
    path: '/municipalite/*',
    uri: '/municipalite/mot-du-maire',
    label: 'Le Mot du Maire',
  },
  {
    path: '/municipalite/mairie-services-municipaux',
    uri: '/municipalite/mairie-services-municipaux',
    label: 'Mairie et Services Municipaux',
  },
]

export const jeunesseRoutes: Route[] = [
  {
    path: '/enfance-jeunesse/*',
    uri: '/enfance-jeunesse/ecole',
    label: "L'école",
  },
  {
    path: '/enfance-jeunesse/menus',
    uri: '/enfance-jeunesse/menus-cantine',
    label: 'Menus cantine',
  },
  {
    path: '/enfance-jeunesse/petite-enfance',
    uri: '/enfance-jeunesse/petite-enfance',
    label: 'Petite enfance',
  },
  {
    path: '/enfance-jeunesse/periscolaire',
    uri: '/enfance-jeunesse/periscolaire',
    label: 'Périscolaire',
  },
  {
    path: '/enfance-jeunesse/college',
    uri: '/enfance-jeunesse/college',
    label: 'Collège Marcel Pagnol',
  },
  {
    path: '/enfance-jeunesse/transport',
    uri: '/enfance-jeunesse/transport-scolaire',
    label: 'Transport Scolaire',
  },
]

export const socialRoutes: Route[] = [
  {
    path: '/social/*',
    uri: '/social/demarches-administratives',
    label: 'Démarches administratives',
  },
]

export const quotidienRoutes: Route[] = [
  {
    path: '/quotidien/*',
    uri: '/quotidien/village',
    label: 'Votre village',
  },
]
