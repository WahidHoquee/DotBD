import React from "react"
import {
    FaFacebookF,
    FaFacebookMessenger,
    FaWhatsapp,
    FaSkype,
} from "react-icons/fa"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"


const useStyles = makeStyles(theme => ({
    iconHolder: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "8px",
        borderRadius: "20px",
        marginRight: "7px",
    },
    icon: {
        height: "22px",
        width: "22px",
    },
}))

const Social = () => {
    const classes = useStyles()
    return (
        <Grid item>
            <Grid container>
                <Grid
                    item
                    className={classes.iconHolder}
                    style={{
                        border: "1px solid #3b5999",
                        color: "#3b5999",
                    }}
                >
                    <FaFacebookF className={classes.icon} />
                </Grid>
                <Grid
                    item
                    style={{
                        border: "1px solid #0084ff",
                        color: "#0084ff",
                    }}
                    className={classes.iconHolder}
                >
                    <FaFacebookMessenger className={classes.icon} />
                </Grid>
                <Grid
                    item
                    style={{
                        border: "1px solid #25D366",
                        color: "#25D366",
                    }}
                    className={classes.iconHolder}
                >
                    <FaWhatsapp className={classes.icon} />
                </Grid>
                <Grid
                    item
                    style={{
                        border: "1px solid #00AFF0",
                        color: "#00AFF0",
                    }}
                    className={classes.iconHolder}
                >
                    <FaSkype className={classes.icon} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Social
