import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
 const IndexPage = ()=>{
   return(
     <Layout>
        <h1>Andrzej Developer</h1>
        <p>Nedd a dev? <Link to="/contact">Contact me</Link></p>
     </Layout>
   )
 }
 export default IndexPage