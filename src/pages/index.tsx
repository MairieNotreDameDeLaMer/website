import { useEffect } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { Section } from '../components'
import Paper from '@mui/material/Paper'

import { JournauxCommunaux } from '../templates'
import { usePageTitle, useSubRoutes } from '../contexts'

const IndexPage = () => {
  const { setPageTitle } = usePageTitle()
  const { setSubRoutes } = useSubRoutes()

  useEffect(() => {
    setPageTitle('Commune de Notre-Dame-de-la-Mer')
  }, [])

  useEffect(() => {
    setSubRoutes([])
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <Section>
          <Typography variant="h4" component="h2" sx={{ marginBottom: '20px' }}>
            Les dernières infos
          </Typography>
          <Paper elevation={3}>
            <JournauxCommunaux />
          </Paper>
          <Box>Les nouveaux horaires du bus Express A14</Box>
          <Box>Bruit du voisinage</Box>
        </Section>
        <Divider
          variant="fullWidth"
          orientation="vertical"
          flexItem
          sx={{ borderColor: 'secondary.dark' }}
        />
        <Section>
          <Typography variant="h4" component="h2" sx={{ marginBottom: '20px' }}>
            Calendrier
          </Typography>
          <div>Timeline</div>
        </Section>
      </Box>
    </Box>
  )
}

export default IndexPage
