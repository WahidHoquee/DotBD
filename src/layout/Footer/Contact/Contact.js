import React from "react"
import { Grid, Box } from "@material-ui/core"
import { MdLocalPhone, MdPhoneAndroid, MdMailOutline, MdLocationOn} from "react-icons/md";
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    contact:{
        display: 'flex',
        // flexDirection: 'row',
        alignItems: 'center',
        color: '#fff',
        fontSize:'16px',
        marginBottom: '15px'
    },
    icon:{
        color: theme.palette.secondary.main,
        height: '30px',
        width: '30px'
    }
}))

const Contact = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column" justify="center" alignContent="center">
            <Grid item>
                <Box className={classes.contact}>
                    <MdLocalPhone className={classes.icon}/>
                    <Box component="span" ml={2}>8801798-323483</Box>
                </Box>
            </Grid>
            <Grid item>
                <Box className={classes.contact}>
                    <MdPhoneAndroid className={classes.icon}/>
                    <Box component="span" ml={2}>8801715-010905</Box>
                </Box>
            </Grid>
            <Grid item>
                <Box className={classes.contact}>
                    <MdMailOutline className={classes.icon}/>
                    <Box component="span" ml={2}>info@dotbd.com</Box>
                </Box>
            </Grid>
            <Grid item>
                <Box className={classes.contact}>
                    <MdLocationOn className={classes.icon}/>
                    <Box component="span" ml={2}>House-478, Road-32, Mohakhali DOHS, Dhaka, Bangladesh</Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Contact
