import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { Layout, Section } from '../components'
import Paper from '@mui/material/Paper'

import { JournauxCommunaux } from '../templates'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle={'Commune de Notre-Dame-de-la-Mer'}>
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
          <Section title="Les dernières infos">
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
          <Section title="Calendrier">
            <div>Timeline</div>
          </Section>
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage
