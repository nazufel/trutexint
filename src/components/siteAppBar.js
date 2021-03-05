import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

export default function SiteAppBar() {

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" size="large" href="/">TRU-TEX</Button>
        <Button color="inherit" size="small" href="/about">About Us</Button>
        <Button color="inherit" size="small" href="/equipment">Equipment</Button>
        <Button color="inherit" size="small" href="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}
