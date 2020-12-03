import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Branches from "./Modules/branches"
import Users from "./Modules/users"
import Applications from "./Modules/Applications/applications"

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    }
}))

const PriceModule = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Users/>
            <Branches/>
            <Applications/>
        </div>
    )
}

export default PriceModule
