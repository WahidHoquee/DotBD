import React from "react"

import Layout from "../layout"
import Products from "../components/Home/Products"
import Testimonials from "../components/Home/Testimonials"
import Clients from "../components/Home/Clients"
import WhyUs from "../components/Home/WhyUs"

const index = () => {
    return (
        <Layout isHome={true}>
            <Products></Products>
            <WhyUs></WhyUs>
            <Testimonials></Testimonials>
            <Clients></Clients>
        </Layout>
    )
}

export default index
