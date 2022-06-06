import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#388e3c',
    },
    secondary: {
      main: '#039be5',
    },
  },
})

export default theme
