import { Typography } from "@material-ui/core";
import React from "react"

import CallToAction from '../components/callToAction';
import Layout from "../components/layout"
import SEO from "../components/seo"

import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="parallax-wire-edm">
      {/* commenting this out incase I want to use text on the images */}
      {/* <div className="parallax-wire-edm-text">
        <Typography>
          TRU-TEX
        </Typography>
      </div> */}
    </div>
    <Typography variant="h5" style={{ margin: 20 }}>
      We are a leading manufacturer of precision die components dedicated to the continuous improvement of our customer’s metal forming operations.
    </Typography>
    <CallToAction
      actionText="Your Next Project Is a Phone Call Away"
      actionLink="/contact"
      buttonText="Get Started"
    />
    <div className="parallax-cnc"></div>
    <CallToAction
      actionText="Quality Is in Our History"
      actionLink="/about"
      buttonText="About Us"
    />
    <div className="parallax-surface-grinding"></div>
    <CallToAction
      actionText="Our Technology Is Ready for Your Next Project"
      actionLink="/equipment"
      buttonText="Equipment"
    />
    <div className="parallax-milling"></div>
    <CallToAction
      actionText="Ready to Get Started?"
      actionLink="/contact"
      buttonText="Contact Us"
    />
  </Layout>
)

export default IndexPage