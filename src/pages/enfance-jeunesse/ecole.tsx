import Typography from '@mui/material/Typography'
import { Layout, Section } from '../../components'
import { jeunesseRoutes } from '../../constants'

const EcolePage = () => {
  return (
    <Layout pageTitle={"L'école"} subRoutes={jeunesseRoutes}>
      <Section>
        <Typography variant="h4" component="h2" sx={{ marginBottom: '20px' }}>
          L’école de Notre-Dame-de-la-Mer
        </Typography>
      </Section>
    </Layout>
  )
}

export default EcolePage
