import React from "react";

import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';
// import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   heading: {
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   body: {
//     textAlign: "justify",
//     textJustify: "inter-word"
//   }
// }));

export default function CallToAction(props) {
  // const classes = useStyles();

  return (
    <Container style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, marginTop: 20, padding: 0 }}>
      <Typography variant="h5">
        {props.actionText}
      </Typography>
      <Button 
        color="primary"
        href={props.actionLink}
        variant="contained" 
      >
        {props.buttonText}
      </Button>
    </Container>
  );
}
