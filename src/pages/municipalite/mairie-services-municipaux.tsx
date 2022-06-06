import Typography from '@mui/material/Typography'
import { useEffect } from 'react'
import { Section } from '../../components'
import { municipaliteRoutes } from '../../constants'
import { usePageTitle, useSubRoutes } from '../../contexts'

const MairieServiceMunicipauxPage = () => {
  const { setPageTitle } = usePageTitle()
  const { setSubRoutes } = useSubRoutes()

  useEffect(() => {
    setPageTitle('Mairie et services municipaux')
  }, [])

  useEffect(() => {
    setSubRoutes(municipaliteRoutes)
  }, [])

  return (
    <Section>
      <Typography variant="h4" component="h2" sx={{ marginBottom: '20px' }}>
        La Mairie de Notre-Dame-de-la-Mer
      </Typography>
    </Section>
  )
}

export default MairieServiceMunicipauxPage
