import { Link as RouterLink } from 'gatsby'
import Tab from '@mui/material/Tab'

interface LinkTabProps {
  label?: string
  value: string
  uri: string
  icon?: React.ReactElement
}

export default function LinkTab(props: LinkTabProps) {
  return <Tab component={RouterLink} to={props.uri} {...props} />
}
