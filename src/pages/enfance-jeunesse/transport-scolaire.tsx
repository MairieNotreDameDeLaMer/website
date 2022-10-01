import Typography from '@mui/material/Typography'
import React from 'react'
import { useEffect } from 'react'
import { Section } from '../../components'
import { jeunesseRoutes } from '../../constants'
import { usePageTitle, useSubRoutes } from '../../contexts'

const TransportScolairePage = () => {
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
    </Section>
  )
}

export default TransportScolairePage
