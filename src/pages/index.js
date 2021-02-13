import React from "react"
import { Link } from 'gatsby'


// import Carousel from "../components/carousel"
import Layout from "../components/layout"
import SEO from "../components/seo"

import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <br />
    {/* <Carousel /> */}

    <br />
    <div className="phoneCallFunnel flex-container">
        <h3 className="phoneCallText">Your Next Project Is a Phone Call Away.</h3>
        <Link to="/contact">Contact Us</Link>
    </div>

    <br />
    <div>
      <h2>Quality Is in Our Family Tree</h2>

      <p>TRU-TEX is a family-owned business in its fourth generation</p>
      <p>We make precision die tooling better than anyone else because we have been doing it longer than anyone else</p>
    
    </div>
    <div>
      <p>Let Our Family Help Yours</p>
      <Link to="/about">About Us</Link>
    </div>

    <br />

    <div className="cuttingEdgeServices">
      <h2>Cutting Edge Services</h2>
      <p>The Best People and the Best Equipment Make the Best Tools</p>

      <p>We Specialize In</p>
      <ul>
        <li>Machining and Turning of tool steel, both soft and hardened (up to 65 Rc)</li>
        <li>​High Precision Wire-cut EDM for demanding tolerances and finishes</li>
        <li>Surface Grinding and Die Sink EDM</li>
      </ul>
      
      <h3>Check Out Our Equipment</h3>
      <Link to="/equipment">Learn More</Link>
    </div>

    <br />

    <div>
      <h3>Ready to Start Your Next Project? Give Us a Call.</h3>
      <Link to="/contact">Contact</Link>
    </div>

  </Layout>
)

export default IndexPage