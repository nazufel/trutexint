import React from "react";

import Card from '@material-ui/core/Card';
import Layout from "../components/layout";
import { makeStyles } from '@material-ui/core/styles';
import CallToAction from '../components/callToAction';
import SEO from "../components/seo";

import officeBuildingImage from "../images/officeBuildingImage.jpg";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    marginTop: 20,
    marginBottom: 20,
  },
  body: {
    textAlign: "justify",
    textJustify: "inter-word"
  },
  callToActionCards: {
    backgroundColor:
      theme.palette.secondary.main,
  }
}));

export default function AboutPage() {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="About" />
        <Typography className={classes.heading} style={{ marginTop: 80 }} variant="h4">
          About Us
        </Typography>
        <Card>
        <img src={ officeBuildingImage } alt="building" align="left" style={{ paddingRight: 20, paddingBottom: 10, width: 400, height: 500 }}/>

        <div style={{ margin: 20 }}>
          <Typography color="primary" variant="h5" component="h2">
            Our Mission
          </Typography>
          <br/>
          <Typography align="justify">
            Our mission is to provide sustainable tool and die manufacturing for the ever-changing needs of our customers.
          </Typography>
          <br/>
          <Typography color="primary" variant="h5" component="h2">
            From Simple Beginnings to the Latest Technology
          </Typography>
          <br/>
          <Typography align="justify" variant="body1">
            TRU-TEX International Corporation was founded in 1960 in Cincinnati, Ohio. We are a family-owned business now in our fourth generation. Through good times and bad, TRU-TEX is here to stay.
            <br />
            <br />
            We are a leading manufacturer of precision die components dedicated to the continuous improvement of our customers' metal forming operations. Using the latest technology, lean manufacturing, and employing highly skilled toolmakers, we provide the highest quality tooling available at competitive prices and lead times.
            <br />
            <br />
            TRU-TEX focuses on building long term relationships with our customers for their tool and die manufacturing needs. To us, our customers are not just a line in a spread sheet. We know them by name. Our customer's success is our success. Customer satisfaction is at the core of our corporate DNA. We are constantly striving for better, more efficient processes in order to increase quality, reduce lead times, and keep costs contained.
            <br />
            <br />
            We practice sound fiscal management, insuring a strong capital base for continued investment in our capabilities. These investments include equipment upgrades, employee retention, and education in order to maintain long-term institutional health.
          </Typography>
        </div>
        
        <div style={{ margin: 20 }}>
          <CallToAction
            actionText="See Our Latest Equipment"
            actionLink="/equipment"
            buttonText="Equipment"
            />
        </div>

        <div style={{ margin: 20 }}>
          <Typography color="primary" variant="h5" component="h2">
            The Mark of Quality Difference
          </Typography>
          <Typography variant="body1">
            We believe that everything that goes out of our doors should be of the highest quality and we are proud to put our mark on it. We focus on producing the highest quality tooling available for your metal-forming operations. Only the highest quality products leave our shop. Our customers get products we are proud to put our mark on.
          </Typography>
          <br/>
          <Typography>
            This is the Mark of Quality
          </Typography>
        </div>
        
        <div style={{ margin: 20 }}>
          <CallToAction
          actionText="Let Us Put Our Mark of Quality on Your Next Project"
          actionLink="/contact"
          buttonText="Contact Us"
            />
        </div>
      </Card>
    </Layout>
  );
}
