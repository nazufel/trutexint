import React from "react"

import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";

import CallToAction from '../components/callToAction';
import FrontPageLayout from "../components/frontPageLayout"
import SEO from "../components/seo"

import './index.css'

const IndexPage = () => (
  <FrontPageLayout>
    <SEO title="Home" />

    <div className="parallax-wire-edm" />
      <div style={{  marginTop: 20, marginBottom: 20, textAlign: "center" }}>
      <Typography variant="h3" color="primary">
        Leaders in Precision Wire EDM
      </Typography>
      <Typography variant="h2" style={{ margin: 20 }}>
        Put Our Four Generations of Experience on Your Next Project
      </Typography>
      <div>
        <Button 
            color="primary"
            href="/about"
            variant="contained" 
          >
            About Us
          </Button>
      </div>
    </div>

    <div className="parallax-cnc" />
    <div style={{  marginTop: 20, marginBottom: 20, textAlign: "center" }}>
      <Typography variant="h3" color="primary">
        We Use the Latest Technology in Tool and Die Manufacturing
      </Typography>
      <Typography variant="h2" style={{ margin: 20 }}>
        Learn About Our Advanced Equipment for Your Next Project
      </Typography>
      <div>
        <Button 
            color="primary"
            href="/equipment"
            variant="contained" 
          >
            Equipment
          </Button>
      </div>
    </div>
    <div className="parallax-surface-grinding" />
    <div style={{  marginTop: 20, marginBottom: 20, textAlign: "center" }}>
      <Typography variant="h3" color="primary">
         Ready to Get Started?
      </Typography>
      <Typography variant="h2" style={{ margin: 20 }}>
        Contact Us Today
      </Typography>
      <div>
        <Button 
            color="primary"
            href="/contact"
            variant="contained" 
          >
            Contact
          </Button>
      </div>
    </div>
  </FrontPageLayout>
)

export default IndexPage