import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
const AboutPage=()=>{
    return(
          <Layout>
            <h1>About page</h1>
            <p>You can contact me <Link to="/contact">Here</Link></p>
           </Layout>
    )
}
export default AboutPage