import Typography from '@mui/material/Typography'
import { Layout, Section } from '../../components'
import { socialRoutes } from '../../constants'

const VillagePage = () => {
  return (
    <Layout pageTitle={'Votre Village'} subRoutes={socialRoutes}>
      <Section>
        <Typography variant="h4" component="h2" sx={{ marginBottom: '20px' }}>
          Notre-Dame-de-la-Mer
        </Typography>
      </Section>
    </Layout>
  )
}

export default VillagePage
