import Typography from '@mui/material/Typography'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Grid from '@mui/material/Grid'
import { useEffect } from 'react'
import { Section } from '../../components'
import { municipaliteRoutes } from '../../constants'
import { usePageTitle, useSubRoutes } from '../../contexts'
import imageMairie3 from '../../images/dame-mer-mairie-2.jpeg'
import imageMairie from '../../images/dame-mer-mairie.jpeg'
import imagePerisocolaire from '../../images/dame-mer-mairie-periscolaire.jpeg'
import imageMairieNoel from '../../images/mairie-dame-mer-noel.jpeg'
import imageMairie2 from '../../images/mairie-dame-mer.jpeg'

const itemData = [
  {
    img: imageMairie,
    title: 'Mairie',
  },
  {
    img: imagePerisocolaire,
    title: 'Periscolaire',
  },
  {
    img: imageMairieNoel,
    title: 'Mairie Noel',
  },
  {
    img: imageMairie2,
    title: 'Mairie',
  },
]

const MairieServiceMunicipauxPage = () => {
  const { setPageTitle } = usePageTitle()
  const { setSubRoutes } = useSubRoutes()

  useEffect(() => {
    setPageTitle('Mairie et services municipaux')
  }, [])

  useEffect(() => {
    setSubRoutes(municipaliteRoutes)
  }, [])

  return (
    <Section>
      <Typography variant="h4" component="h2" sx={{ marginBottom: '20px' }}>
        La Mairie de Notre-Dame-de-la-Mer
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ marginBottom: '50px' }}
      >
        <Grid direction="column" justifyContent="center" alignItems="center">
          <img
            src={`${imageMairie3}?w=200&h=200&fit=crop&auto=format`}
            srcSet={`${imageMairie3}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
            alt="Mairie"
            loading="lazy"
          />
        </Grid>
        <Grid direction="column" justifyContent="center" alignItems="center">
          <Typography variant="h6" component="h4" sx={{ marginBottom: '20px' }}>
            Quelles que soient vos démarches administratives, la mairie vous
            accueille, vous informe et vous oriente.
          </Typography>
          <Typography sx={{ marginBottom: '20px' }}>
            Elle met également à disposition un grand nombre de dépliants
            pouvant vous aider dans vos recherches spécifiques.
          </Typography>
          <Typography sx={{ marginBottom: '20px' }}>
            Horaires d’ouverture de la Mairie au public :
          </Typography>
          <Typography sx={{ marginBottom: '10px' }}>
            Mardi de 9h00 à 12h00 et de 14h00 à 18h00.
          </Typography>
          <Typography sx={{ marginBottom: '10px' }}>
            Mercredi de 9h00 à 12h00
          </Typography>
          <Typography sx={{ marginBottom: '10px' }}>
            Jeudi de 9h00 à 12h00 et de 14h00 à 19h00.
          </Typography>
          <Typography variant="h6" component="p" sx={{ marginBottom: '20px' }}>
            La mairie est fermée le mercredi après-midi.
          </Typography>
          <Typography variant="h6" component="p" sx={{ marginBottom: '20px' }}>
            Le secrétariat de la mairie vous reçoit uniquement sur rendez-vous
            les lundis et vendredis.
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h5" component="h3" sx={{ marginBottom: '20px' }}>
        Coordonnées de la Mairie :
      </Typography>
      <Typography sx={{ marginBottom: '20px' }}>
        Tel. : 01.30.93.06.16.
      </Typography>
      <Typography sx={{ marginBottom: '20px' }}>
        Mail : secretariat@ndlm78.fr
      </Typography>
      <Typography variant="h6" component="p" sx={{ marginBottom: '20px' }}>
        Mr MAILLOC, Maire, peut également vous accueillir, sur rendez-vous.
      </Typography>
      <Typography variant="h6" component="p" sx={{ marginBottom: '20px' }}>
        Messieurs les adjoints au maire, peuvent vous recevoir sur rendez-vous.
      </Typography>
      <ImageList cols={2} rowHeight={664}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=200&h=200&fit=crop&auto=format`}
              srcSet={`${item.img}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Section>
  )
}

export default MairieServiceMunicipauxPage
