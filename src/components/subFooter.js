import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography align="center"  variant="body2" color="textSecondary">
      {'Copyright © '} {new Date().getFullYear()} {' '}
      <Link color="inherit" href="/">
        TRU-TEX International Corporation
      </Link>{' '}
    </Typography>

  );
};

function Hosting() {
  return (
    <Typography align="center" variant="body2" color="textSecondary">
      {'Designed and Hosted by '}
      <Link color="inherit" href="https://github.com/nazufel">
        Ryan Ross
      </Link>{' '}
    </Typography>

  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexFlow: 'flex-end'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    backgroundColor:
    theme.palette.secondary.main,
  },
}));

export default function SubFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer} style={{ marginTop: 20}}>
      <Grid container direction="row" justify="center">
        <Grid item xs={12}>
          <Copyright /> 
        </Grid>
        <Grid item xs={12}>
         <Hosting />
        </Grid>
      </Grid>
    </footer>
  );
}
