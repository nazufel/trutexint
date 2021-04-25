import React from "react";

import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import FrontPageLayout from "../components/frontPageLayout";
import SEO from "../components/seo";

import './index.css'

const IndexPage = () => (
  <FrontPageLayout>
    <SEO title="Home" />

    <div style={{  marginTop: 500, marginBottom: 300, textAlign: "center" }}>
      <Typography variant="h3" color="primary">
        TRU-TEX International Corporation
      </Typography>
      <Typography variant="h2" style={{ margin: 20 }}>
        The Mark of Quality
      </Typography>
    </div>

    <div style={{ textAlign: "center" }}>
      <FontAwesomeIcon icon={ faChevronDown } style={{ marginBottom: 100, fontSize: 100}}/>
    </div>

    <div class="container" style={{ textAlign: "center" }}>
    <div className="parallax-wire-edm" style={{  marginTop: 50, marginBottom: 20 }}/>
      <Typography variant="h3" color="primary">
        Leaders in Precision Wire EDM
      </Typography>
      <Typography variant="h2" style={{ margin: 20 }}>
        Put Our Four Generations of Experience on Your Next Project
      </Typography>
      <div style={{ marginBottom: 20 }}>
        <Button 
            color="primary"
            href="/about"
            variant="contained" 
          >
            About
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