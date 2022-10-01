import React from 'react'
import List from '@mui/material/List'
import ListSubheader from '@mui/material/ListSubheader'
import { useStaticQuery, graphql } from 'gatsby'

import { Deliberations } from '../components'

export default function DeliberationsTemplate() {
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
            file: string
          }
        }
      }>
    }
  }>(graphql`
    query DeliberationsQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "deliberations" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              date
              file
              templateKey
              title
            }
          }
        }
      }
    }
  `)

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
      subheader={<ListSubheader>Délibérations</ListSubheader>}
    >
      {edges &&
        edges.map(
          ({
            node: {
              id,
              frontmatter: { title, date, file },
            },
          }) => <Deliberations key={id} title={title} date={date} link={file} />
        )}
    </List>
  )
}
