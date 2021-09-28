/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { ThemeProvider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import 'fontsource-roboto';
import PropTypes from "prop-types";
import React from "react";
import SiteAppBar from '../components/siteAppBar';
import './layout.css';
import SubFooter from './subFooter';



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
      main: '#054d9f'
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
      <body>
        <SiteAppBar />
        <Container maxWidth="lg">
          <main>{children}</main>
          <div style={{ marginTop: 400 }}>
            <SubFooter />
          </div>
        </Container>
      </body>
    </ThemeProvider>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
