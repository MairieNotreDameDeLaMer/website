import Typography from '@mui/material/Typography'
import { Layout, Section } from '../../components'
import { municipaliteRoutes } from '../../constants'

// markup
const MairieServiceMunicipauxPage = () => {
  return (
    <Layout
      pageTitle={'Mairie et services municipaux'}
      subRoutes={municipaliteRoutes}
    >
      <Section>
        <Typography variant="h4" component="h2" sx={{ marginBottom: '20px' }}>
          La Mairie de Notre-Dame-de-la-Mer
        </Typography>
      </Section>
    </Layout>
  )
}

export default MairieServiceMunicipauxPage
