import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useEffect } from 'react'
import { Section } from '../../components'
import { municipaliteRoutes } from '../../constants'
import { usePageTitle, useSubRoutes } from '../../contexts'
import { Deliberations } from '../../templates'

const DeliberationsPage = () => {
  const { setPageTitle } = usePageTitle()
  const { setSubRoutes } = useSubRoutes()

  useEffect(() => {
    setPageTitle('Délibérations')
  }, [])

  useEffect(() => {
    setSubRoutes(municipaliteRoutes)
  }, [])

  return (
    <Section>
      <Deliberations />
    </Section>
  )
}

export default DeliberationsPage
