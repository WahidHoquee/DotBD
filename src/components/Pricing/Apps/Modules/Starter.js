import React, { useContext } from "react"

import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    TextField,
    Grid,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import { PriceContext } from "../../../../context/pricing"

const Users = () => {
    // const { dispatch } = useContext(PriceContext)

    return (
        <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Users</Typography>
            </ExpansionPanelSummary>
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
                            onChange={e =>
                                // dispatch({
                                //     type: "USER_SLIDER",
                                //     value: e.target.value,
                                // })
                            }
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

export default Users
