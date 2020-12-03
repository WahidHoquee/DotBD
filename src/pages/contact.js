import React from "react"

import Layout from "../layout/"
import Maps from "../components/Contact/Maps"
import ContactForm from "../components/Contact/Form"
// import Image from '../components/Contact/Image/Image';

const Contact = () => {
  return (
    <Layout headline="Contact Us">
      <ContactForm />
      <Maps />
    </Layout>
  )
}

export default Contact
