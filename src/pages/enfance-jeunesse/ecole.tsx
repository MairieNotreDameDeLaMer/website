import React from 'react'
import { useEffect } from 'react'
import { Section } from '../../components'
import { jeunesseRoutes } from '../../constants'
import { usePageTitle, useSubRoutes } from '../../contexts'
import ecoleCour from '../../images/ecole/dame-mer-ecole-5.jpg'
import classe1 from '../../images/ecole/cycle2-250.jpg'
import classe2 from '../../images/ecole/cycle3-250.jpg'
import dortoir from '../../images/ecole/dortoir-opt-250.jpg'
import maternelle from '../../images/ecole/maternelle-250.jpg'
import maternelle2 from '../../images/ecole/maternelle-opt-250.jpg'
import {
  Grid,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  Typography,
} from '@mui/material'

const itemData = [
  {
    img: ecoleCour,
    title: 'Cour Ecole',
  },
  {
    img: classe1,
    title: 'Classe',
  },
  {
    img: classe2,
    title: 'Classe 2',
  },
  {
    img: dortoir,
    title: 'Dortoir',
  },
  {
    img: maternelle,
    title: 'Maternelle',
  },
  {
    img: maternelle2,
    title: 'Maternelle Exterieur',
  },
]

const EcolePage = () => {
  const { setPageTitle } = usePageTitle()
  const { setSubRoutes } = useSubRoutes()

  useEffect(() => {
    setPageTitle("L'école")
  }, [])

  useEffect(() => {
    setSubRoutes(jeunesseRoutes)
  }, [])

  return (
    <Section>
      <Typography variant="h4" component="h2" sx={{ marginBottom: '20px' }}>
        L’école de Notre-Dame-de-la-Mer
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography>L’équipe enseignante</Typography>
          <List>
            <ListItem alignItems="flex-start">
              {' '}
              Mme Le Poupon : Institutrice des maternelles
            </ListItem>
            <ListItem alignItems="flex-start">
              {' '}
              Mme Bonneaux : Institutrice des CP - CE1
            </ListItem>
            <ListItem alignItems="flex-start">
              {' '}
              Mme Rioual, directrice : Institutrice des CE2 - CM1 - CM2
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={6}>
          <Typography>Les effectifs de notre école</Typography>
          <List>
            <ListItem alignItems="flex-start"> 2018/2019 : 56 enfants</ListItem>
            <ListItem alignItems="flex-start"> 2019/2020 : 64 enfants</ListItem>
            <ListItem alignItems="flex-start"> 2020/2021 : 63 enfants</ListItem>
            <ListItem alignItems="flex-start"> 2021/2022 : 58 enfants</ListItem>
            <ListItem alignItems="flex-start"> 2022/2023 : 62 enfants</ListItem>
          </List>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Nous vous rappelons qu’il existe au sein de l’école les services
            suivants :
          </Typography>
          <Typography>- Garderie de 6h50 à 8h20 et de 16h30 à 18h45</Typography>
          <Typography>
            Numéro de téléphone pour joindre à la garderie, soit Mme PADE Sonia
            le matin, soit Mme LE BRIS Céline le soir : 01.30.42.02.43.
          </Typography>
          <Typography>
            Tarifs de la garderie : 3,25 € pour le matin ou le soir 5,50 € pour
            le matin et le soir
          </Typography>
          <Typography>
            Pour les enfants restant après 18h45, heure de fermeture, le prix
            sera majorée de 3,20 € par tranche de 15 minutes et ne pouvant pas
            dépasser l’horaire de 19h.
          </Typography>
          <Typography>Tarif de la cantine : 4,20 € le repas.</Typography>
        </Grid>
      </Grid>

      <ImageList cols={3} rowHeight={600}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=250&h=250&fit=crop&auto=format`}
              srcSet={`${item.img}?w=250&h=250&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Section>
  )
}

export default EcolePage
