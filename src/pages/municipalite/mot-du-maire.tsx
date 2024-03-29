import Typography from '@mui/material/Typography'
import { useEffect } from 'react'
import { Section } from '../../components'
import { municipaliteRoutes } from '../../constants'
import { usePageTitle, useSubRoutes } from '../../contexts'

const MotDuMairePage = () => {
  const { setPageTitle } = usePageTitle()
  const { setSubRoutes } = useSubRoutes()

  useEffect(() => {
    setPageTitle('Mot du maire')
  }, [])

  useEffect(() => {
    setSubRoutes(municipaliteRoutes)
  }, [])

  return (
    <Section>
      <Typography variant="h4" component="h2" sx={{ marginBottom: '20px' }}>
        Madame, Monsieur,
        <br /> Chers citoyens,
      </Typography>
      <Typography sx={{ marginBottom: '20px' }}>
        Ce site internet se veut être le reflet d’une rencontre entre une
        politique économique et touristique et une vraie vie villageoise
        culturelle, sportive, associative, attachée à ses racines. Il comportera
        une pléthore d’informations utiles à votre vie quotidienne.
        Renseignements pratiques, démarches administratives, programmes des
        animations, il vous permettra d’appréhender clairement et aisément
        l’ensemble de la commune. Il se veut être un véritable outil
        d’information et de communication à votre service.
      </Typography>
      <Typography sx={{ marginBottom: '20px' }}>
        Au travers de ce site, Notre-Dame-de-la-Mer vous ouvre ses portes et
        vous accueillera très chaleureusement à tous moments.
      </Typography>
      <Typography sx={{ marginBottom: '20px' }}>
        Bienvenue à vous toutes et tous, bonne visite.
      </Typography>
      <Typography textAlign="right" sx={{ marginBottom: '10px' }}>
        Votre maire
      </Typography>
      <Typography
        textAlign="right"
        variant="h6"
        component="p"
        sx={{ marginBottom: '20px' }}
      >
        Jean-Luc MAILLOC
      </Typography>
    </Section>
  )
}

export default MotDuMairePage
