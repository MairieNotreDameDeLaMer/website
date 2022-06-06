import Box from '@mui/material/Box'
import Logo from '../images/logo.svg'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageOne from '../images/diapo-rivage.jpeg'
import ImageDeux from '../images/diapo-mairie-haut.jpeg'
import ImageTrois from '../images/diapo-ecole4.jpeg'
import SvgIcon from '@mui/material/SvgIcon'

export default function Header() {
  return (
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
          backgroundColor: 'rgba(0,0,0,0.3)',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'primary.contrastText',
          textShadow: '1px 2px 1px rgba(0,0,0,0.5)',
        }}
      >
        <Box
          sx={{
            width: 250,
            height: 150,
            marginRight: 10,
          }}
        >
          <SvgIcon
            component={Logo}
            viewBox="0 0 800 508"
            sx={{ width: '100%', height: '100%' }}
          />
        </Box>
        <Box>
          <h1>Mairie de Notre-Dame-de-la-Mer</h1>
        </Box>
      </Box>
    </Box>
  )
}
