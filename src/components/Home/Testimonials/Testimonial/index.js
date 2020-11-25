import React from 'react';
import {makeStyles} from '@material-ui/styles'
import { Grid, Avatar, Card, CardContent, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '4rem 2rem',
        margin: '1rem 2rem',
        backgroundColor: '#eee',
        // height: '40rem',
        position: "relative",
        overflow: "visible",
        opacity: 0.5
    },
    avatar: {
        width: '100px',
        height: '100px',
        marginBottom: '1.5rem'
    },
    review: {
        height: '14rem',
        overflow: 'hidden',
        padding: '2rem'
    },
    btn:{
        position: 'absolute',
        bottom: '-22px',
        borderRadius: '2rem',
        zIndex: 1000,
        padding: '1rem 3rem'
    }
}))
  

const Testimonial = ({name, details, review}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container direction="column" justify="center" alignItems="center">
                    {/* <Avatar src={faker.image.avatar()} className={classes.avatar}/> */}
                    <Typography variant="h6" gutterBottom>{name}</Typography>
                    <Typography variant="subtitle2" gutterBottom>{details}</Typography>
                    <Typography className={classes.review}>{review}</Typography>
                    <Button variant="contained" color="secondary" className={classes.btn}>Read More</Button>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Testimonial
