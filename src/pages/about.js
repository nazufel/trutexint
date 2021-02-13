import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import officeBuildingImage from "../images/officeBuildingImage.jpg"

const AboutPage = () => (

  <Layout>
    <SEO title="About" />
      <br />
      <h1>About TRU-TEX International Corporation</h1>

      <img src={ officeBuildingImage } alt="building" />

      <br />
      <p>TRU-TEX International Corporation was founded in 1960 in Cincinnati, Ohio. We are a family-owned business that is now in our fourth generation. Through good times and bad, TRU-TEX is here to stay.</p>

      <p>We are a leading manufacturer of precision die components dedicated to the continuous improvement of our customer’s metal forming operations. Using the latest technology, lean manufacturing, 
        and employing highly skilled toolmakers, we provide the highest quality tooling available at competitive prices and lead times.</p>

      <p>We can take a process and improve it through quality, innovation, and technology.</p>

      <div className="markOfQualityDifference">
      <h2>The Mark of Quality Difference</h2>

      <p>Our customers' success is our success. We believe that everything that goes out of our doors should be of the highest quality to where we are proud to put our stamp on it. We focus 
        on producing the highest quality tooling available for your metal-forming operations. Only the highest quality products leave our shop. Our customers get products we are proud to put our mark on.</p>

        <h4>That is the <span className="markOfQuality">Mark of Quality</span></h4>

      <h3>Let Us Put Our Mark of Quality on Your Next Project</h3>
      <Link to="/contact">Contact Us</Link>
    </div>
  </Layout>
)

export default AboutPage
