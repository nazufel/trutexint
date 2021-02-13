/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import 'fontsource-roboto';

import './layout.css';
import SubFooter from './subFooter';
import SiteAppBar from '../components/siteAppBar';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Roboto",
    ].join(','),
    h2: {
      fontSize: 36,
      margin: 15,
    }
  },
  palette: {
    primary: {
      main: '#8d3f6f'
    },
    secondary: {
      main: '#cacaca'
    },
    tertiary: {
      main: '#524E2'
    },
  }
})


const Layout = ({ children }) => {
  return (
  <ThemeProvider theme={theme}>
    <Container maxWidth="lg">
      <SiteAppBar />
      <main>{children}</main>
        <SubFooter/>
    </Container>
  </ThemeProvider>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
