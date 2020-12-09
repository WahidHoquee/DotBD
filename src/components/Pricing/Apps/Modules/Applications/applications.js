import React from "react"

import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import Features from "./Features/Features"

const Applications = () => {
    return (
        <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Applications</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Features/>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default Applications
