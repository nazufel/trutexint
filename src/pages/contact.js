import React from "react"

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFax } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';

import ContactForm from '../components/contactForm'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  icon: {
    height: 32,
    width: 32,
    marginRight: 20,
  }
});

export default function ContactPage() {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Contact" />
      <Typography style={{ marginTop: 15 }} variant="h4">
        Contact Us
      </Typography>

      <Grid container spacing={2} style={{ padding: 20 }}>
        <Grid container item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardContent>
              <Typography style={{ marginTop: 15 }} variant="h5">
                We Want to Talk to You
              </Typography>
            </CardContent>
            <CardContent style={{ display: "flex", flexDirection: "row", justifyItems: "start"}}>
              <FontAwesomeIcon icon={ faPhone } className={classes.icon}/>
              <Typography variant="h6">
                513-825-8844
              </Typography>
            </CardContent>
            <CardContent style={{ display: "flex", flexDirection: "row", justifyItems: "start"}}>
              <FontAwesomeIcon icon={ faAt } className={classes.icon}/>
              <Typography variant="h6">
                info@trutexint.com
              </Typography>
            </CardContent>
            <CardContent style={{ display: "flex", flexDirection: "row", justifyItems: "start"}}>
              <FontAwesomeIcon icon={ faMapMarkerAlt } className={classes.icon}/>
              <Typography variant="h6">
                <Link color='inherit' href="https://goo.gl/maps/3FVEKB7WHeJPrjzUA">
                11050 Southland Road Cincinnati, Ohio 45240
                </Link>
              </Typography>
            </CardContent>
            <CardContent style={{ display: "flex", flexDirection: "row", justifyItems: "start"}}>
              <FontAwesomeIcon icon={ faFax } className={classes.icon}/>
              <Typography variant="h6">
              513-825-8904
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid container item xs={12} sm={6} justify="float-center">
        <Card>
          <CardContent>
            <Typography style={{ marginTop: 15 }} variant="h5">
              Send Us a Message!
            </Typography>
            <ContactForm />
          </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}
