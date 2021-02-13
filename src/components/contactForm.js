import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default function ContactForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} validate autoComplete="off">
      <TextField
        label="First Name"
        id="outlined-full-width"
        fullWidth
        margin="normal"
        variant="outlined"
        required="true"
      />
      <TextField
        label="Last Name"
        id="outlined-full-width"
        fullWidth
        margin="normal"
        variant="outlined"
        required="true"
      />
      <TextField
        label="Company"
        id="outlined-full-width"
        fullWidth
        margin="normal"
        variant="outlined"
        required="true"
      />
      <TextField
        label="Phone Number"
        id="outlined-full-width"
        fullWidth
        margin="normal"
        variant="outlined"
        required="true"
      />
      <TextField
        label="Email"
        id="outlined-full-width"
        fullWidth
        margin="normal"
        variant="outlined"
        required="true"
      />
      <TextField
        label="Message"
        id="outlined-full-width"
        multiline="true"
        fullWidth
        margin="normal"
        variant="outlined"
        rows={3}
        required="true"
      />
      <div className="equipment-call-to-action" style={{ marginBottom: 5, marginTop: 10 }}>
          <Button 
            color="primary"
            href="/contact"
            variant="contained" 
          >
            Submit
          </Button>

      </div>
    </form>
  );
}