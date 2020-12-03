import React, { useContext } from "react"
import { Box, Grid } from "@material-ui/core"

import { PriceContext } from "../../../../context/pricing"

const SliderModule = ({ title, type }) => {
    const { pricing } = useContext(PriceContext)
    // console.log(pricing[type]);
    
    return (
        <Box p={2}>
            <Box p={1} style={{ borderBottom: "2px solid #ccc", marginBottom: "20px" }}>
                <h3>{title}</h3>
            </Box>
            <Box>
                <Grid container justify="space-between">
                    <Grid item>
                        {pricing[type] ?  pricing[type].ammount : null}
                        {` ${title}`}
                    </Grid>
                    <Grid item>
                        {pricing[type] ? pricing[type].price : null}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default SliderModule
