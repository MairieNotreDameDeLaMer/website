export interface Person {
  firstName: string
  lastName: string
  gender: 'Homme' | 'Femme' | 'Non-Binaire'
  jobTitle?: string
  category: 'Maire' | 'Conseiller' | 'Adjoint' | 'Employé municipal'
}
