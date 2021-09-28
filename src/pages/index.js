import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import FrontPageLayout from "../components/frontPageLayout";
import SEO from "../components/seo";
import CNCMachine from '../images/CNCMachine.jpg';
import HeroLogo from '../images/heroLogo.jpg';
import GrindingMachine from '../images/surfaceGrindingMachine.jpg';
import WireEdm from '../images/wire-edm-01.jpg';


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

      <div style={{ alignItems: "center", display: "flex", flexDirection: "column", marginTop: 100, marginBottom: 300 }}>
        <Card style={{ width: "75%" }}>
          <CardMedia
            className={classes.media}
            image={HeroLogo}
            title="TIC Logo"
          />
        </Card>
      </div>


      <div style={{ alignItems: "center", display: "flex", flexDirection: "column", marginBottom: 300 }}>
        <Card style={{ width: "75%" }}>
          <CardMedia
            className={classes.media}
            image={WireEdm}
            title="Wire EDM"
          />
          <CardContent>
            <div style={{ textAlign: "center" }}>
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

      <div style={{ alignItems: "center", display: "flex", flexDirection: "column", marginBottom: 300 }}>
        <Card style={{ width: "75%" }}>
          <CardMedia
            className={classes.media}
            image={CNCMachine}
            title="CNC Machine"
          />
          <CardContent>
            <div style={{ textAlign: "center" }}>
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

      <div style={{ alignItems: "center", display: "flex", flexDirection: "column", marginBottom: 50 }}>
        <Card style={{ width: "75%" }}>
          <CardMedia
            className={classes.media}
            image={GrindingMachine}
            title="Grinding Machine"
          />
          <CardContent>
            <div style={{ textAlign: "center" }}>
              <Typography variant="h3" color="primary">
                Ready to Get Started?
              </Typography>
              <Typography variant="h2" style={{ margin: 20 }}>
                Contact Us Today
              </Typography>
              <div style={{ marginBottom: 10 }}>
                <Button
                  color="primary"
                  href="/contact"
                  variant="contained"
                >
                  Contact
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </FrontPageLayout>
  )
};