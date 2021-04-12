import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../sections/banner"
import Experience from "../sections/experience"
import Rules from "../sections/rules"
import Screenshot from "../sections/screenshot"
import Review from "../sections/review"
import Faq from "../sections/faq"
import Contact from "../sections/contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Gameplan" />
    <Banner />
    <Experience />
    <Rules />
    <Screenshot />
    <Review />
    <Faq />
    <Contact />
  </Layout>
)

export default IndexPage
