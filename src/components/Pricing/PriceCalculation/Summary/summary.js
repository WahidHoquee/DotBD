import React, { useContext } from "react"
import { Grid, Box } from "@material-ui/core"
import SummaryBox from "./SummaryBox/SummaryBox"
import { PriceContext } from "../../../../context/pricing"

const Summary = () => {
    const {pricing} = useContext(PriceContext);
    return (
        <div>
            <Box p={1} style={{borderBottom:'2px solid #ccc',marginBottom:'20px'}}>
                <h3>Summary</h3>
            </Box>
            <Grid container>
                <SummaryBox label="Apps" ammount="3" />
                <SummaryBox label="Features" ammount="9" />
                <SummaryBox label="Users" ammount={pricing.users.ammount} />
                <SummaryBox label="Branches" ammount={pricing.branches.ammount} />
            </Grid>
        </div>
    )
}

export default Summary
