import React from 'react'
import Carousal from "../../components/Carousal/Carousal"
import Catagory from '../../components/Catagory/Catagory'
import Product from '../../components/Product/Product'
import Layout from '../../components/LayOut/Layout'

function Landing() {
  return (
   <Layout>
      <Carousal />
      <Catagory />
      <Product />
   </Layout>
  )
}

export default Landing
