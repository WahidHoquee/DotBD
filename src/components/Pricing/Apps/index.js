import React, { useContext } from "react"
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, TextField, Grid } from "@material-ui/core"
import ExpandMoreIcon from "react-icons/md"

import { PriceContext } from "../../../store/context"
import Modules from "./Modules"

const Starter = ({ sector, price }) => {
    // const { dispatch } = useContext(PriceContext)

    return (
        <ExpansionPanel defaultExpanded>
            {/* <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Users</Typography>
            </ExpansionPanelSummary> */}
            <ExpansionPanelDetails>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            // onChange={e =>
                            //     dispatch({
                            //         type: "USER_SLIDER",
                            //         value: e.target.value,
                            //     })
                            // }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <span> Users x 4,000.00 BDT </span>
                    </Grid>
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

const PriceModule = ({apps}) => {
    return (
        <div>
            <Starter sector="Users" price="4,000.00" />
            <Starter sector="Branches" price="24,000.00" />
            <Modules apps={apps}/>
        </div>
    )
}

export default PriceModule
