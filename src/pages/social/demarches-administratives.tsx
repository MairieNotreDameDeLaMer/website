import Typography from '@mui/material/Typography'
import { Layout, Section } from '../../components'
import { socialRoutes } from '../../constants'

const DemarchesAdministrativesPage = () => {
  return (
    <Layout pageTitle={'Démarches Administratives'} subRoutes={socialRoutes}>
      <Section>
        <Typography variant="h4" component="h2" sx={{ marginBottom: '20px' }}>
          Les démarches administratives
        </Typography>
      </Section>
    </Layout>
  )
}

export default DemarchesAdministrativesPage
