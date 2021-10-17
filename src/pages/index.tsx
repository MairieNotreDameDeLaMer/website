import { CSSProperties, Fragment } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { Layout, Section } from '../components'
import List from '@mui/material/List'
import ListSubheader from '@mui/material/ListSubheader'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import PdfIcon from '@mui/icons-material/PictureAsPdf'
import Paper from '@mui/material/Paper'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageOne from '../images/diapo-rivage.jpeg'
import ImageDeux from '../images/diapo-mairie-haut.jpeg'
import ImageTrois from '../images/diapo-ecole4.jpeg'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle={'Commune de Notre-Dame-de-la-Mer'}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ImageList
            sx={{ width: '100%', height: 370, display: 'flex' }}
            cols={3}
          >
            <ImageListItem>
              <img src={ImageOne} loading="lazy" />
            </ImageListItem>
            <ImageListItem>
              <img src={ImageDeux} loading="lazy" />
            </ImageListItem>
            <ImageListItem>
              <img src={ImageTrois} loading="lazy" />
            </ImageListItem>
          </ImageList>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <Section title="Les dernières infos">
            <Paper elevation={3}>
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
                }}
                subheader={
                  <ListSubheader>Les journaux communaux</ListSubheader>
                }
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PdfIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Journal" secondary="Janvier 2019" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PdfIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Journal" secondary="Avril 2019" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PdfIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Journal" secondary="2020" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PdfIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Bulletin" secondary="2021" />
                </ListItem>
              </List>
            </Paper>
            <Box>Les nouveaux horaires du bus Express A14</Box>
            <Box>Bruit du voisinage</Box>
          </Section>
          <Divider
            variant="fullWidth"
            orientation="vertical"
            flexItem
            sx={{ borderColor: 'secondary.dark' }}
          />
          <Section title="Calendrier">
            <div>Timeline</div>
          </Section>
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage
