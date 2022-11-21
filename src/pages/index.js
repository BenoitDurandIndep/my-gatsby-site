// Step 1: Import React
import Layout  from '../components/layout'
import * as React from 'react'
import { StaticImage} from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="A japanese thing" src="https://origamijapan.net/wp-content/uploads/2017/10/tomoe-mon_2000x1400.jpg"/>
      <StaticImage alt="A japanese symbol" src="../images/Koi.jpg"/>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage