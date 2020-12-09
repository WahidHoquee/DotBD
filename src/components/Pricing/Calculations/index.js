import React, { useContext } from "react"
import { Paper, Box } from "@material-ui/core"

import Summary from "./Summary/summary";
import SliderModule from "./Modules/sliderModule";
import Applications from "./Modules/Applications";

import { PriceContext } from "../../../store/context";

const PriceCalculation = () => {
    const { pricing } = useContext(PriceContext);
    return (
        <div>
            <Paper>
                <Box p={2}>
                    <Summary/>
                    <SliderModule type="users" title="Users" />
                    <SliderModule type="branches" title="Branches" />
                    <Applications applications={pricing.applications}/>
                </Box>
            </Paper>
        </div>
    )
}

export default PriceCalculation

// users: {
//     ammount: 1,
//     price: 4000,
// },
// branches: {
//     ammount: 1,
//     price: 4000,
// },
// applications: [
//     {
//         type: "Accounting",
//         price: 40000,
//         noOfAdditionalFeature: 6,
//         additionalFeaturePrice: 0
//     }
// ]
