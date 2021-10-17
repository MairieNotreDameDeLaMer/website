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

export default function Section({ title, children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography sx={{ color: 'secondary.main' }} variant="h2">
        {title}
      </Typography>
      <Box>{children}</Box>
    </Box>
  )
}
