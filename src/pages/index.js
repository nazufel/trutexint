import React from "react";

import Button from '@material-ui/core/Button';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import { Typography } from "@material-ui/core";
import FrontPageLayout from "../components/frontPageLayout";
import { makeStyles } from '@material-ui/core/styles';
import SEO from "../components/seo";

import WireEdm from '../images/wire-edm-01.jpg';
import CNCMachine from '../images/CNCMachine.jpg';
import GrindingMachine from '../images/surfaceGrindingMachine.jpg';
import MillingMachine from '../images/millingMachine.jpg';
import ArcWelding from '../images/arcWelding.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 480,
  },
  media: {
    height: 600,
  },
});

export default function IndexPage() {
  const classes = useStyles();

  return (
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


        <div style={{ alignItems: "center", display: "flex", flexDirection: "column", marginBottom: 300 }}>
          <Card style={{ width: "75%" }}>
            <CardMedia 
              className={classes.media}
              image={ WireEdm }
              title="Wire EDM"
            />
            <CardContent>
              <div style={{ textAlign: "center"}}>
                <Typography variant="h3" color="primary">
                  We Are Leaders in Precision Wire EDM
                </Typography>
                <Typography variant="h2" style={{ margin: 20 }}>
                  Learn About Our Four Generations of Experience
                </Typography>
                <div style={{ marginBottom: 10 }}>
                  <Button 
                      color="primary"
                      href="/about"
                      variant="contained" 
                    >
                      About
                    </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div style={{ alignItems: "center", display: "flex", flexDirection: "column", marginBottom: 500 }}>
          <Card style={{ width: "75%" }}>
            <CardMedia 
              className={classes.media}
              image={ CNCMachine }
              title="CNC Machine"
            />
            <CardContent>
              <div style={{ textAlign: "center"}}>
                <Typography variant="h3" color="primary">
                  We Use the Latest Technology in Tool and Die Manufacturing
                </Typography>
                <Typography variant="h2" style={{ margin: 20 }}>
                  Learn About Our Advanced Equipment for Your Next Project
                </Typography>
                <div style={{ marginBottom: 10 }}>
                  <Button 
                      color="primary"
                      href="/equipment"
                      variant="contained" 
                    >
                      Equipment
                    </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>


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
};