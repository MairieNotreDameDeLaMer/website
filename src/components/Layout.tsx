import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import SvgIcon from '@mui/material/SvgIcon'
import Logo from '../images/logo.svg'

export default function Layout({ pageTitle, children }) {
  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <header>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">NOTRE-DAME-DE-LA-MER</Typography>
              <SvgIcon
                component={Logo}
                viewBox="0 0 800 500"
                style={{ fontSize: '13rem' }}
              />
              <Typography variant="h6">
                Canton de Bonnières-sur-Seine 78
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  )
}
