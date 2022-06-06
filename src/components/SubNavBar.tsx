import { useSubRoutes } from '../contexts'
import Routes from './Routes'

export default function SubNavBar() {
  const { subRoutes } = useSubRoutes()
  return <Routes routes={subRoutes} />
}
