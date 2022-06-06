import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Routes from './Routes'
import { topRoutes } from '../constants'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <nav>
          <Routes
            routes={topRoutes}
            textColor="inherit"
            indicatorColor="secondary"
          />
        </nav>
      </AppBar>
    </Box>
  )
}
