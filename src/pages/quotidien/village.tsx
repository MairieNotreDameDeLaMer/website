import Typography from '@mui/material/Typography'
import { useEffect } from 'react'
import { Section } from '../../components'
import { quotidienRoutes } from '../../constants'
import { usePageTitle, useSubRoutes } from '../../contexts'

const VillagePage = () => {
  const { setPageTitle } = usePageTitle()
  const { setSubRoutes } = useSubRoutes()

  useEffect(() => {
    setPageTitle('Votre Village')
  }, [])

  useEffect(() => {
    setSubRoutes(quotidienRoutes)
  }, [])

  return (
    <Section>
      <Typography variant="h4" component="h2" sx={{ marginBottom: '20px' }}>
        Notre-Dame-de-la-Mer
      </Typography>
    </Section>
  )
}

export default VillagePage
