import {
  Typography,
  Grid,
  ListItem,
  ImageList,
  ImageListItem,
} from '@mui/material'
import List from '@mui/material/List'
import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import { Section } from '../components'
import Ecole from '../components/ecole'

export default function EcoleTemplate() {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery<{
    allMarkdownRemark: {
      edges?: Array<{
        node: {
          id: string
          frontmatter: {
            title: string
            date: string
            equipe: string
            services: string
            photos: string[]
            effectifs: string
          }
        }
      }>
    }
  }>(graphql`
    query EcoleQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "ecole" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              date
              effectifs
              equipe
              photos
              services
              title
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {edges &&
        edges.map(
          ({
            node: {
              id,
              frontmatter: { title, date, equipe, services, photos, effectifs },
            },
          }) => (
            <Ecole
              key={id}
              title={title}
              date={date}
              equipe={equipe}
              services={services}
              photos={photos}
              effectifs={effectifs}
            />
          )
        )}
    </>
  )
}
