import { Helmet } from 'react-helmet'
import { usePageTitle } from '../contexts'

export default function Title() {
  const { pageTitle } = usePageTitle()
  return (
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
  )
}
