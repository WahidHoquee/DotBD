import React from "react"
import { Container, Grid, Box } from "@material-ui/core";

import apps from '../data/Pricing/applications';

import PriceContext from "../store/context"

import Layout from "../layout";
import Applications from "../components/Pricing/Apps"
import Calculations from "../components/Pricing/Calculations"


const pricing = () => {
  return (
    <PriceContext apps={apps}>
      <Layout headline="Pricing Module">
        <Container fluid>
          <Box mt={15} mb={15}>
            <Grid container>
              <Grid item sm={8}>
                <Applications />
              </Grid>
              <Grid item sm={4}>
                {/* <Calculations /> */}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Layout>
    </PriceContext>
  )
}

export default pricing
