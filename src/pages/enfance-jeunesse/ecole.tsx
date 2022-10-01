import React from 'react'
import { useEffect } from 'react'
import { Section } from '../../components'
import { jeunesseRoutes } from '../../constants'
import { usePageTitle, useSubRoutes } from '../../contexts'
import {
  Grid,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import ReactMarkdown from 'react-markdown'
import Ecole from '../../templates/ecole'

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
      <Ecole />
    </Section>
  )
}
export default EcolePage
