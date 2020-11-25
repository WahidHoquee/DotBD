import React from "react"
import PropTypes from "prop-types"
import { Box, Grid, Button } from "@material-ui/core"

const Details = props => {
  const { children, value, index} = props

  return (
    <Box hidden={value !== index} p={5}>
      <Grid container spacing={2}>
        <Grid item sm={4}>
          <Grid container direction="column" justify="center" alignItems="center">
            <Grid item>
              <Box mb={2}>
                <Button variant="outlined" color="secondary">Watch Demo</Button>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Button variant="outlined" color="primary">Learn More</Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={8}>
          {children}
        </Grid>
      </Grid>
    </Box>
  )
}

Details.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

export default Details
