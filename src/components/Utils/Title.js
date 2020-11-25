import React from "react"
import { makeStyles } from "@material-ui/styles"
import { Container, Grid } from "@material-ui/core"
import underline from "../../images/section-heading.svg"

const useStyles = makeStyles(theme => ({
    heading: {
        position: 'relative',
        textAlign: 'center',
        paddingBottom: '3rem',
        marginBottom: '4rem',
        fontFamily: "'Poppins', sans-serif",
        fontSize: '5rem',
        fontWeight: 600,
        lineHeight: '4.8rem',
        letterSpacing: 2,
        color: '#2c2c51',
        '&::before':{
            content: '""',
            display: 'block',
            position: 'absolute',
            marginLeft: '-42.5px',
            width: '9.5rem',
            height: 8,
            left: '50%',
            bottom: 0,
            background: `url(${underline}) no-repeat`,
            backgroundSize: 'cover'
        }
    }
}))

const Title = props => {
    const classes = useStyles();
    return (
        <Container>
            <Grid container alignItems="center" justify="center">
                <Grid item xs={6}>
                    <h1 className={classes.heading}>
                        {props.children}
                    </h1>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Title
