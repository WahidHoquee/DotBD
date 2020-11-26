import React from 'react';
import {makeStyles} from '@material-ui/styles'
import { Grid, Avatar, Card, CardContent, Typography, Button } from '@material-ui/core';
import faker from 'faker'

const useStyles = makeStyles(theme => ({
    root: {
        padding: '4rem 2rem',
        margin: '1rem 2rem',
        backgroundColor: '#eee',
        // height: '40rem',
        position: "relative",
        overflow: "visible",
        opacity: 0.5,
        [theme.breakpoints.down('md')]: {
            margin: '.5rem 1rem',
            padding: '1rem',
        },
    },
    avatar: {
        width: '12rem',
        height: '12rem',
        border: '1px solid #aaa',
        marginBottom: '1.5rem'
    },
    review: {
        height: '14rem',
        [theme.breakpoints.down('xs')]: {
            height: '15rem',
        },

        overflow: 'hidden',
        // textOverflow: 'ellipsis',
        // padding: '2rem',
        textAlign: 'justify',
        // whiteSpace: 'nowrap',
        margin: '1rem 0'
    },
    btn:{
        position: 'absolute',
        bottom: '-2.2rem',
        borderRadius: '2rem',
        zIndex: 1000,
        padding: '1rem 3rem'
    }
}))
  

const Testimonial = ({ avatar, name, details, review }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Avatar src={avatar} className={classes.avatar}/>
                    <Typography variant="h6" gutterBottom>{name}</Typography>
                    <Typography variant="subtitle2" style={{textAlign: 'center', padding:'0 1rem'}} gutterBottom>{details}</Typography>
                    <Typography className={classes.review}>{review}</Typography>
                    <Button variant="contained" color="secondary" className={classes.btn}>Read More</Button>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Testimonial
