import Typography from '@mui/material/Typography'
import { useEffect } from 'react'
import { Section } from '../../components'
import { socialRoutes } from '../../constants'
import { usePageTitle, useSubRoutes } from '../../contexts'

const DemarchesAdministrativesPage = () => {
  const { setPageTitle } = usePageTitle()
  const { setSubRoutes } = useSubRoutes()

  useEffect(() => {
    setPageTitle('Démarches Administratives')
  }, [])

  useEffect(() => {
    setSubRoutes(socialRoutes)
  }, [])

  return (
    <Section>
      <Typography variant="h4" component="h2" sx={{ marginBottom: '20px' }}>
        Les démarches administratives
      </Typography>
    </Section>
  )
}

export default DemarchesAdministrativesPage
