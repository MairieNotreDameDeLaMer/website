import Typography from '@mui/material/Typography'
import { useEffect } from 'react'
import { usePageTitle, useSubRoutes } from '../contexts'

// markup
const IndexPage = () => {
  const { setPageTitle } = usePageTitle()
  const { setSubRoutes } = useSubRoutes()

  useEffect(() => {
    setPageTitle('Bibliotheque')
  }, [])

  useEffect(() => {
    setSubRoutes([])
  }, [])

  return (
    <Typography variant="h4" component="h2" sx={{ marginBottom: '20px' }}>
      Bibliothèque Municipale de Notre-Dame-de-la-Mer
    </Typography>
  )
}

export default IndexPage
