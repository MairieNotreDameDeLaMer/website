import Typography from '@mui/material/Typography'
import { Layout } from '../components'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle={'Bibliotheque'} subRoutes={[]}>
      <Typography variant="h4" component="h2" sx={{ marginBottom: '20px' }}>
        Bibliothèque Municipale de Notre-Dame-de-la-Mer
      </Typography>
    </Layout>
  )
}

export default IndexPage
