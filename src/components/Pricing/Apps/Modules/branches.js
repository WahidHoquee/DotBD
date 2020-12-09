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

const Branches = () => {
    const { dispatch } = useContext(PriceContext)

    return (
        <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Branches</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            id="outlined-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            onChange={e =>
                                dispatch({
                                    type: "BRANCH_SLIDER",
                                    value: e.target.value,
                                })
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <span> Branches x 24,000.00 BDT </span>
                    </Grid>
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default Branches
