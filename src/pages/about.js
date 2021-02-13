import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import officeBuildingImage from "../images/officeBuildingImage.jpg"
import { Typography } from "@material-ui/core"

const AboutPage = () => (

  <Layout>
    <SEO title="About" />
      <Typography style={{ marginTop: 15, paddingBottom: 15 }} variant="h4">
        About
      </Typography>

      <img src={ officeBuildingImage } alt="building" align="left" style={{ paddingLeft: 20, paddingRight: 10, paddingBottom: 10, width: 400, height: 480 }}/>

      <Typography variant="body1">
        TRU-TEX International Corporation was founded in 1960 in Cincinnati, Ohio. We are a family-owned business that is now in our fourth generation. Through good times and bad, TRU-TEX is here to stay.
      </Typography>
      <br/>
      <Typography variant="body1">
        We are a leading manufacturer of precision die components dedicated to the continuous improvement of our customer’s metal forming operations. Using the latest technology, lean manufacturing, 
        and employing highly skilled toolmakers, we provide the highest quality tooling available at competitive prices and lead times.
      </Typography>
      <br/>
      <Typography variant="body1">
        We can take a process and improve it through quality, innovation, and technology.
      </Typography>
      <br/>
      <Typography color="primary" variant="h5" component="h2">
        The Mark of Quality Difference
      </Typography>

      <p>Our customers' success is our success. We believe that everything that goes out of our doors should be of the highest quality to where we are proud to put our stamp on it. We focus 
        on producing the highest quality tooling available for your metal-forming operations. Only the highest quality products leave our shop. Our customers get products we are proud to put our mark on.</p>

        <h4>That is the <span className="markOfQuality">Mark of Quality</span></h4>



      <h3>Let Us Put Our Mark of Quality on Your Next Project</h3>
      <Link to="/contact">Contact Us</Link>
  </Layout>
)

export default AboutPage
