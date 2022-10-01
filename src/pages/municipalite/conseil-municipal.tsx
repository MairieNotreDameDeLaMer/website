import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useEffect } from 'react'
import { Section } from '../../components'
import { municipaliteRoutes } from '../../constants'
import { usePageTitle, useSubRoutes } from '../../contexts'

interface Group {
  title: string
  people: Person[]
}

interface Person {
  civilite: 'Madame' | 'Monsieur'
  lastName: string
  firstName: string
  job?: string
  email?: string
  phoneNumber?: string
}

const groups: Group[] = [
  {
    title: 'Les adjoints',
    people: [
      {
        civilite: 'Monsieur',
        lastName: 'Wurtz',
        firstName: 'Thierry',
        job: '1er Adjoint',
      },
      {
        civilite: 'Monsieur',
        lastName: 'Mary',
        firstName: 'Jacques',
        job: '2ème Adjoint',
      },
      {
        civilite: 'Monsieur',
        lastName: 'Bodevin',
        firstName: 'Alban',
        job: '3ème Adjoint',
      },
    ],
  },
  {
    title: 'Les conseillers',
    people: [
      {
        civilite: 'Monsieur',
        lastName: 'Berry',
        firstName: 'Alain',
      },
      {
        civilite: 'Monsieur',
        lastName: 'Bouvery',
        firstName: 'Bruno',
      },
      {
        civilite: 'Monsieur',
        lastName: 'Brebion',
        firstName: 'Thomas',
      },
      {
        civilite: 'Monsieur',
        lastName: 'Chevalier',
        firstName: 'Michel',
      },
      {
        civilite: 'Madame',
        lastName: 'Couplan',
        firstName: 'Fabienne',
      },
      {
        civilite: 'Monsieur',
        lastName: 'Fillot',
        firstName: 'Vincent',
      },
      {
        civilite: 'Monsieur',
        lastName: 'Jolivel',
        firstName: 'Dominique',
      },
      {
        civilite: 'Monsieur',
        lastName: 'Lopez',
        firstName: 'Jean-François',
      },
      {
        civilite: 'Madame',
        lastName: 'Mojrano',
        firstName: 'Henriette',
      },
      {
        civilite: 'Madame',
        lastName: 'Poree',
        firstName: 'Dominique',
      },
      {
        civilite: 'Madame',
        lastName: 'Raynal',
        firstName: 'Didier',
      },
      {
        civilite: 'Madame',
        lastName: 'Verdure',
        firstName: 'Luc',
      },
      {
        civilite: 'Madame',
        lastName: 'Vigneron',
        firstName: 'Luc',
      },
    ],
  },
  {
    title: 'Les employés communaux',
    people: [
      {
        civilite: 'Madame',
        lastName: 'Siegfried',
        firstName: 'Marie-Claire',
        job: 'Secrétaire de mairie',
        email: 'secretariat@ndlm78.fr',
        phoneNumber: '0130930616',
      },
      {
        civilite: 'Madame',
        lastName: 'Motot',
        firstName: 'Lucie',
        job: 'Bibliothécaire et Services Périscolaires',
        email: 'media@ndlm78.fr',
        phoneNumber: '0130930616',
      },
      {
        civilite: 'Monsieur',
        lastName: 'Bertulot',
        firstName: 'David',
        job: 'Services Techniques',
      },
      {
        civilite: 'Madame',
        lastName: 'Pade',
        firstName: 'Sonia',
        job: 'ATSEM',
      },
      {
        civilite: 'Madame',
        lastName: 'Debrix',
        firstName: 'Nathalie',
      },
      {
        civilite: 'Madame',
        lastName: 'Le Bris',
        firstName: 'Céline',
        job: 'Périscolaires',
      },
    ],
  },
]

const ConseilMunicipalPage = () => {
  const { setPageTitle } = usePageTitle()
  const { setSubRoutes } = useSubRoutes()

  useEffect(() => {
    setPageTitle('Conseil Municipal')
  }, [])

  useEffect(() => {
    setSubRoutes(municipaliteRoutes)
  }, [])

  return (
    <Section>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4" component="h2" sx={{ marginBottom: '20px' }}>
          Le Conseil Municipal de Notre-Dame-de-la-Mer
        </Typography>
        <Typography variant="h5" component="h3" sx={{ marginBottom: '20px' }}>
          Le Maire
        </Typography>
        <Typography variant="h6" component="p" sx={{ marginBottom: '20px' }}>
          MAILLOC Jean-Luc
        </Typography>
        <Typography sx={{ marginBottom: '70px' }}>
          secretariat@ndlm78.fr
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {groups.map(({ title, people }) => (
            <Grid
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant="h5"
                component="h3"
                sx={{ marginBottom: '40px' }}
              >
                {title.toUpperCase()}
              </Typography>
              {people.map(
                ({
                  civilite,
                  lastName,
                  firstName,
                  job,
                  email,
                  phoneNumber,
                }) => (
                  <Typography sx={{ marginBottom: '20px' }}>
                    {civilite}{' '}
                    <Typography variant="h6" component="span">
                      {lastName.toUpperCase()} {firstName}
                    </Typography>{' '}
                    {job && (
                      <>
                        <br />
                        {job}
                      </>
                    )}
                    {email && (
                      <>
                        <br />
                        {email}
                      </>
                    )}
                    {phoneNumber && (
                      <>
                        <br />
                        {phoneNumber}
                      </>
                    )}
                  </Typography>
                )
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Section>
  )
}

export default ConseilMunicipalPage
