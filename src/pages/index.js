import React from "react";

import Button from '@material-ui/core/Button';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import { Typography } from "@material-ui/core";
import FrontPageLayout from "../components/frontPageLayout";
import SEO from "../components/seo";

import WireEdm from '../images/wire-edm-01.jpg';
import CNCMachine from '../images/CNCMachine.jpg';
import GrindingMachine from '../images/surfaceGrindingMachine.jpg';
import MillingMachine from '../images/millingMachine.jpg';
import ArcWelding from '../images/arcWelding.jpg';

import './index.css'

const IndexPage = () => (
  <FrontPageLayout>
    <SEO title="Home" />

    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 500, marginBottom: 500}}>
      <div>
        <Typography variant="h3" color="primary">
          TRU-TEX International Corporation
        </Typography>
      </div>
      <br/>
      <div>
        <Typography variant="h2" style={{ margin: 20 }}>
          The Mark of Quality
        </Typography>
      </div>
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