import { Typography, Grid, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import ReactMarkdown from 'react-markdown'

export interface Ecole {
  title: string
  date: string
  equipe: string
  services: string
  photos: string[]
  effectifs: string
}

export default function Ecole({
  title,
  date,
  equipe,
  services,
  photos,
  effectifs,
}: Ecole) {
  const dateFormatted = new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
  })
  return (
    <>
      <Typography variant="h4" component="h2" sx={{ marginBottom: '20px' }}>
        L’école de Notre-Dame-de-la-Mer
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <ReactMarkdown children={equipe}></ReactMarkdown>
        </Grid>
        <Grid item xs={6}>
          <ReactMarkdown children={effectifs}></ReactMarkdown>
        </Grid>
        <Grid item xs={12}>
          <ReactMarkdown children={services}></ReactMarkdown>
        </Grid>
      </Grid>

      <ImageList cols={3} rowHeight={600}>
        {photos.map((item) => (
          <ImageListItem key={item}>
            <img
              src={`${item}?w=250&h=250&fit=crop&auto=format`}
              srcSet={`${item}?w=250&h=250&fit=crop&auto=format&dpr=2 2x`}
              alt={item}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  )
}
