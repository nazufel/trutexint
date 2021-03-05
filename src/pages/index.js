import { Typography } from "@material-ui/core";
import React from "react"

import CallToAction from '../components/callToAction';
import FrontPageLayout from "../components/frontPageLayout"
import SEO from "../components/seo"

import './index.css'

const IndexPage = () => (
  <FrontPageLayout>
    <SEO title="Home" />

    <div className="parallax-wire-edm" />
    <Typography variant="h5" style={{ margin: 20 }}>
      We are a leading manufacturer of precision die components dedicated to the continuous improvement of our customer’s metal forming operations.
    </Typography>
    <CallToAction
      actionText="Your Next Project Is a Phone Call Away"
      actionLink="/contact"
      buttonText="Get Started"
    />
    <div className="parallax-cnc" />
    <CallToAction
      actionText="Quality Is in Our History"
      actionLink="/about"
      buttonText="About Us"
    />
    <div className="parallax-surface-grinding" />
    <CallToAction
      actionText="Our Technology Is Ready for Your Next Project"
      actionLink="/equipment"
      buttonText="Equipment"
    />
    <div className="parallax-milling" />
    <CallToAction
      actionText="Ready to Get Started?"
      actionLink="/contact"
      buttonText="Contact Us"
    />
  </FrontPageLayout>
)

export default IndexPage