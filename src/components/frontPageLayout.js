/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import 'fontsource-roboto';
import PropTypes from "prop-types";
import React from "react";
import './layout.css';
import SiteAppBar from './siteAppBar';
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

export default function FrontPageLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <SiteAppBar />
      <body>
        <main style={{ padding: 0, margin: 0 }}>{children}</main>
      </body>
      <SubFooter />
    </ThemeProvider>
  );
}

FrontPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

