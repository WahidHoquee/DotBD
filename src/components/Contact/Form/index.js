import React from "react";
import { useMediaQuery, Grid, Container, Box, TextField, Button, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles"
import Social from "../../../layout/Footer/Social/Social"

const ContactForm = () => {
    const classes = useStyles();
    const lg = useMediaQuery(theme => theme.breakpoints.down('lg'));
    const md = useMediaQuery(theme => theme.breakpoints.down('md'));
    const sm = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const xs = useMediaQuery(theme => theme.breakpoints.down(670));

    return (
        <Container fluid className={classes.root}>
            <Grid container direction={xs ? 'column-reverse' : "row"} alignItems="center" spacing={5}>
                <Grid item xs={xs ? 12 : 7}>
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField variant="outlined" className={classes.input} label="Full Name" />
                        <TextField variant="outlined" className={classes.input} label="Email Address" />
                        <TextField variant="outlined" className={classes.input} label="Subject" />
                        <TextField variant="outlined" label="Your Message" className={classes.input} multiline rows="4" />
                        <div style={{textAlign: "center"}}>
                            <Button variant="contained" color="secondary" className={classes.button}>
                                Send Message
                            </Button>
                        </div>
                    </form>
                </Grid>
                <Grid item xs={xs ? 12 : 5} className={classes.content}>
                    <Box mb={5}>
                        <Typography variant="h4" gutterBottom>
                            Don’t Hesitate to contact with us for any kind of
                            information
                        </Typography>
                    </Box>
                    <Box mb={1}>
                        <Typography variant="h6" gutterBottom>
                            Call us for immediate support in this number
                        </Typography>
                    </Box>
                    <Box mb={4}>
                        <Typography variant="h5" gutterBottom>
                            +88-01798-323483
                        </Typography>
                    </Box>
                    <Box>
                        <Social/>
                    </Box>
                    <Divider  className={classes.divider}/>
                </Grid>
            </Grid>
        </Container>
    )
}

const useStyles = makeStyles(theme => ({
    root:{
        padding: '15rem 0',
        [theme.breakpoints.down(1230)]: {
            padding: '15rem 3rem',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '10rem 3rem',
        },
        [theme.breakpoints.down(670)]: {
            padding: '10rem 12rem',
        },
        [theme.breakpoints.down(550)]: {
            padding: '10rem 6rem',
        },
        [theme.breakpoints.down(480)]: {
            padding: '10rem 3rem',
        },
        [theme.breakpoints.down(360)]: {
            padding: '10rem 1rem',
        },    

    },
    form:{
        display: 'flex',
        flexDirection: 'column',
    },
    input:{
        display: 'block',
        margin: 'auto',
        marginBottom: '3rem',
        '& div':{
            width: '65rem',
            [theme.breakpoints.down(1080)]: {
                width: '55rem',
            },    
            [theme.breakpoints.down(780)]: {
                width: '45rem',
            },    
            [theme.breakpoints.down(680)]: {
                width: '55rem',
            },    
            [theme.breakpoints.down(480)]: {
                width: '50rem',
            },    
            [theme.breakpoints.down(400)]: {
                width: '45rem',
            },    
            [theme.breakpoints.down(360)]: {
                width: '40rem',
            },    
            [theme.breakpoints.down(300)]: {
                width: '35rem',
            },    
        }
    },
    button:{
        width: '15rem',
        padding: '1.5rem ',
        textAlign: 'center',
        backgroundColor: 'rgb(219, 75, 82) ',
        color: '#fff',
    },
    content: {
        transform: 'translate(0, -3.5rem)',
        [theme.breakpoints.down(670)]: {
            transform: 'translate(0, 0rem)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center'
        },    
    },
    divider: {
        display: 'none',
        [theme.breakpoints.down(670)]: {
            display: 'block',
            width: '100%',
            margin: '7.5rem 0 3rem'
        }
    }
}))
  

export default ContactForm
