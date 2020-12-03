import React from "react"
import { Container, Box } from "@material-ui/core"

import Layout from "../layout/"
import Introduction from "../components/About/Introduction"
import Mission from "../components/About/Mission"
import Vision from "../components/About/Vision"

const about = () => {
  return (
    <Layout headline="About Us">
      <Container fluid>
        <Introduction />
      </Container>
      <Box style={{ backgroundColor: "#eee" }}>
        <Container fluid>
          <Mission />
        </Container>
      </Box>
      <Container fluid>
        <Vision />
      </Container>
    </Layout>
  )
}

export default about
