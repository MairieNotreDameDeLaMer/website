import { Link as RouterLink } from 'gatsby'
import { Helmet } from 'react-helmet'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from '@mui/material/Link'
import Header from './Header'
import NavBar from './NavBar'
import SubNavBar from './SubNavBar'
import { Route } from './Routes'

export interface LayoutProps {
  pageTitle: string
  subRoutes: Route[]
  children: React.ReactNode
}

export default function Layout({
  pageTitle,
  subRoutes,
  children,
}: LayoutProps) {
  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <header>
        <Header />
        <NavBar />
        <SubNavBar routes={subRoutes} />
      </header>
      <main>
        <Box
          sx={{
            marginTop: '50px',
            marginX: '50px',
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
