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
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageOne from '../images/diapo-rivage.jpeg'
import ImageDeux from '../images/diapo-mairie-haut.jpeg'
import ImageTrois from '../images/diapo-ecole4.jpeg'

export default function Layout({ pageTitle, children }) {
  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <header>
        <Box
          sx={{
            backgroundImage: `url(${ImageDeux})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '370px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 1280,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Box
              sx={{
                width: 250,
                height: 150,
                backgroundColor: 'white',
              }}
            >
              <Logo viewBox="0 0 800 508" width="100%" height="100%" />
            </Box>
            <Box
              sx={{
                alignSelf: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <h1>Mairie de Notre-Dame-de-la-Mer</h1>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar sx={{ justifyContent: 'center' }}>
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
      <main>
        <Box
          sx={{
            marginTop: '50px',
          }}
        >
          {children}
        </Box>
      </main>
      <footer>
        <Box>
          <Toolbar sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <nav>
              <List sx={{ display: 'inline-flex' }}>
                <ListItem>
                  <Link
                    component={RouterLink}
                    color="secondary.dark"
                    underline="hover"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    component={RouterLink}
                    color="secondary.dark"
                    underline="hover"
                    to="/legal"
                  >
                    Mentions légales
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    component={RouterLink}
                    color="secondary.dark"
                    underline="hover"
                    to="/accessibility"
                  >
                    Accésibilitié
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    component={RouterLink}
                    color="secondary.dark"
                    underline="hover"
                    to="/cookies"
                  >
                    Cookies
                  </Link>
                </ListItem>
              </List>
            </nav>
          </Toolbar>
        </Box>
      </footer>
    </div>
  )
}
