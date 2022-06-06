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
