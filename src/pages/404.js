import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MillingMachine from '../images/millingMachine.jpg';
import ArcWelding from '../images/arcWelding.jpg';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
