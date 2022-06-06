import Tabs, { TabsProps } from '@mui/material/Tabs'
import LinkTab from './LinkTab'
import { useRouteMatch } from '../hooks'

export interface Route {
  path: string
  uri: string
  label: string
}

export interface RoutesProps {
  routes: Route[]
  textColor?: TabsProps['textColor']
  indicatorColor?: TabsProps['indicatorColor']
}

export default function Routes({
  routes,
  textColor,
  indicatorColor,
}: RoutesProps) {
  const patterns = routes.map(({ path }) => path).reverse()
  const match = useRouteMatch(patterns)
  const currentTab = match?.path
  return (
    <Tabs
      value={currentTab}
      textColor={textColor}
      centered
      indicatorColor={indicatorColor}
    >
      {routes.map(({ path, uri, label }) => (
        <LinkTab key={path} label={label} value={path} uri={uri} />
      ))}
    </Tabs>
  )
}
