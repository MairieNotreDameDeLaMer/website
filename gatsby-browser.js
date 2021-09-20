import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from '@mui/material/styles'
import theme from './src/theme'

function RootLayout({ children }) {
  return (
    <Fragment>
      <Helmet></Helmet>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Fragment>
  )
}

export const wrapRootElement = ({ element }) => {
  return <RootLayout>{element}</RootLayout>
}
