import React from "react"
import { Paper, Grid, Box } from "@material-ui/core"

const SummaryBox = ({label,ammount}) => {
    return (
            <Grid item xs={3}>
                <Paper>
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        alignContent="center"
                        justify="center"
                    >
                        <Box p={2}>
                            <Grid item>
                                <Box textAlign="center">{ammount ? ammount : 1}</Box>
                            </Grid>
                            <Grid item>
                                <Box>{label}</Box>
                            </Grid>
                        </Box>
                    </Grid>
                </Paper>
            </Grid>
    )
}

export default SummaryBox
