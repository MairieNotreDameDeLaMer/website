import { Link as RouterLink } from 'gatsby'
import { Helmet } from 'react-helmet'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import SvgIcon from '@mui/material/SvgIcon'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from '@mui/material/Link'
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
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <Box sx={{ width: 300, height: 150 }}>
                <Logo viewBox="0 0 800 508" width="100%" height="100%" />
              </Box>
              <nav>
                <List sx={{ display: 'inline-flex' }}>
                  <ListItem>
                    <Link
                      component={RouterLink}
                      color="secondary"
                      underline="hover"
                      to="/"
                    >
                      Accueil
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      component={RouterLink}
                      color="secondary"
                      underline="hover"
                      to="/about"
                    >
                      About
                    </Link>
                  </ListItem>
                </List>
              </nav>
            </Toolbar>
          </AppBar>
        </Box>
      </header>
      <main>{children}</main>
    </div>
  )
}
