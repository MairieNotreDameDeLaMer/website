import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import React, { Fragment } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './src/theme'
import Layout from './src/components/Layout'

function RootLayout({ children }) {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Fragment>
  )
}

export const wrapRootElement = ({ element }) => {
  return <RootLayout>{element}</RootLayout>
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
