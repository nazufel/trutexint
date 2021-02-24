import React from "react";
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
  }
}));

export default function AboutPage() {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="About" />
        <Typography className={classes.heading} variant="h4">
          About
        </Typography>
        <img src={ officeBuildingImage } alt="building" align="left" style={{ paddingRight: 20, paddingBottom: 10, width: 400, height: 480 }}/>
        <Typography color="primary" variant="h5" component="h2">
          Our Mission
        </Typography>
        <br/>
        <Typography>
          Our mission is to improve our products continuously in order to meet the ever-growing needs of our customers. The success of our customers is our success. We tirelessly pursue the latest technology, lean
        </Typography>
        <br/>
        <Typography color="primary" variant="h5" component="h2">
          From Simple Beginnings to the Latest Technology
        </Typography>
        <br/>
        <Typography variant="body1" style={{textAlign: "justify", textJustify: "inter-word"}}>
          TRU-TEX International Corporation was founded in 1960 in Cincinnati, Ohio. We are a family-owned business now in our fourth generation. Through good times and bad, TRU-TEX is here to stay.
        </Typography>
        <br/>
        <Typography variant="body1">
          We are a leading manufacturer of precision die components dedicated to the continuous improvement of our customers' metal forming operations. Using the latest technology, lean manufacturing, and employing highly skilled toolmakers, we provide the highest quality tooling available at competitive prices and lead times.
        </Typography>
        <br/>
        <Typography variant="body1">
          We can take a process and improve it through quality, innovation, and technology.
        </Typography>
        <br/>
        <CallToAction
          actionText="See Our Latest Equipment"
          actionLink="/equipment"
          buttonText="Equipment"
        />
        <br/>
        <Typography color="primary" variant="h5" component="h2">
          The Mark of Quality Difference
        </Typography>
        <br/>
        <Typography variant="body1">
          We believe that everything that goes out of our doors should be of the highest quality and we are proud to put our mark on it. We focus on producing the highest quality tooling available for your metal-forming operations. Only the highest quality products leave our shop. Our customers get products we are proud to put our mark on.
        </Typography>
        <br/>
        <Typography>
          This is the <span color="primary">Mark of Quality</span>
        </Typography>  
        <br/>
        <CallToAction
          actionText="Let Us Put Our Mark of Quality on Your Next Project"
          actionLink="/contact"
          buttonText="Contact Us"
        />
    </Layout>
  );
}
