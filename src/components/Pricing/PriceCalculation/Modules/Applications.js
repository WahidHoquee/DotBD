import React from "react"
import { Box, Grid } from "@material-ui/core"

const Applications = ({ applications }) => (
    <div>
        <Box p={1} mb={2} style={{ borderBottom: "2px solid #ccc" }}>
            <h3>Applications</h3>
        </Box>
        {applications.map(({type,price,included,noOfAdditionalFeature,additionalFeaturePrice}) => {
            return (
                <Box key={type} p={2}>
                    <Box>
                        <Grid container justify="space-between">
                            <Grid item>{type}</Grid>
                            <Grid item>{price}</Grid>
                        </Grid>
                        {noOfAdditionalFeature > 0 ? (
                            <Grid container justify="space-between">
                                <Grid item>
                                    + {noOfAdditionalFeature} additional features
                                </Grid>
                                <Grid item>
                                    {additionalFeaturePrice}
                                </Grid>
                            </Grid>
                        ) : null}
                    
                    </Box>
                </Box>
            )
        })}
    </div>
)

export default Applications
