import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { Layout, Section } from '../components'
import Paper from '@mui/material/Paper'

import { JournauxCommunaux } from '../templates'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle={'Commune de Notre-Dame-de-la-Mer'} subRoutes={[]}>
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
            <Typography
              variant="h4"
              component="h2"
              sx={{ marginBottom: '20px' }}
            >
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
            <Typography
              variant="h4"
              component="h2"
              sx={{ marginBottom: '20px' }}
            >
              Calendrier
            </Typography>
            <div>Timeline</div>
          </Section>
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage
