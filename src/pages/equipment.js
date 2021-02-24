import React from "react"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import CallToAction from '../components/callToAction';
import Layout from "../components/layout"
import SEO from "../components/seo"
import WireEdm from '../images/wire-edm-03.jpg';
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
    height: 140,
  },
});

//TODO get images for each of the equipment types
export default function EquipmentPage() {
  const classes = useStyles();
  
  return (
    <Layout>
      <SEO title="Equipment" />
      <Typography style={{ marginTop: 20, marginBottom: 20 }} variant="h4">
        The Best Toolmakers Need the Best Equipment
      </Typography>

      <Grid container spacing={2} justify="float-left">
        <Grid item xs={12} sm={6} lg={4}>
          <Card className={classes.root}>
            <CardMedia 
              className={classes.media}
              image={ WireEdm }
              title="Wire EDM"
            />
            <CardContent>
              <Typography color="primary" variant="h5" component="h2">
                Wire EDM Machines
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="AGIECUT ProgressVP2"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="AGIECUT Progress 2"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Agie Charmilles Die Sinker EDM"/>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card className={classes.root}>
            <CardMedia 
              className={classes.media}
              image={ CNCMachine }
              title="CNC Machine"
            />
            <CardContent>
              <Typography color="primary" gutterButton variant="h5" component="h2">
                CNC Machines
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="OKUMA MB-46VAE"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="OKUMA MB-460VE"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Hardige GX1000 VMC"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="OKUMA Genos L200E-MY-E X 500"/>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card className={classes.root}>
            <CardMedia 
              className={classes.media}
              image={ GrindingMachine }
              title="Grinding Machine"
            />
            <CardContent>
              <Typography color="primary" gutterButton variant="h5" component="h2">
                Grinding Machines
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Okamoto 12-24 DX"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Chevalier Smart H88 III"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="LeBlond Heavy Duty Lathe"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Parker-Majestic Precision"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Harig Precision Hand Feed Surface Grinders"/>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card className={classes.root}>
            <CardMedia 
              className={classes.media}
              image={ MillingMachine }
              title="Milling Machine"
            />
            <CardContent>
              <Typography color="primary" gutterButton variant="h5" component="h2">
                Milling Machines
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Acer 3VS-II Vertical"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="TRAK 2OP M11"/>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card className={classes.root}>
            <CardMedia 
              className={classes.media}
              image={ ArcWelding }
              title="Other Tools"
            />
            <CardContent>
              <Typography color="primary" gutterButton variant="h5" component="h2">
                Other Tools
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Power Saws"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Arc Welder"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Drill Press"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Hydraulic Lift and Boom"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Hand Power Tools"/>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <CallToAction
          actionText="Let Us Put Our Mark of Quality on Your Next Project"
          actionLink="/contact"
          buttonText="Contact Us"
        />

    </Layout>
  )
};
