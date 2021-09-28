import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';


export default function SiteAppBar() {

  return (
    <AppBar >
      <Toolbar>
        <Button color="inherit" size="large" href="/">TRU-TEX</Button>
        <Button color="inherit" size="small" href="/about">About Us</Button>
        <Button color="inherit" size="small" href="/equipment">Equipment</Button>
        <Button color="inherit" size="small" href="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}
