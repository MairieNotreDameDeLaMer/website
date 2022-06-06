import Routes, { RoutesProps } from './Routes'

export interface SubNavBarProps extends RoutesProps {}

export default function SubNavBar({ routes }: SubNavBarProps) {
  return <Routes routes={routes} />
}
