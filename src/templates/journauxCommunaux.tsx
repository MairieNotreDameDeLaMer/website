import List from '@mui/material/List'
import ListSubheader from '@mui/material/ListSubheader'
import { useStaticQuery, graphql } from 'gatsby'

import { JournalCommunaux } from '../components'

export default function JournauxCommunauxTemplate() {
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
    query JournauxCommunauxQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "journal-communaux" } } }
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
      subheader={<ListSubheader>Les journaux communaux</ListSubheader>}
    >
      {edges &&
        edges.map(
          ({
            node: {
              id,
              frontmatter: { title, date, file },
            },
          }) => (
            <JournalCommunaux key={id} title={title} date={date} link={file} />
          )
        )}
    </List>
  )
}
