import React from 'react';
import { Link } from 'gatsby';
import { Grid, Typography, Box } from '@material-ui/core';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
    headline: {
        borderBottom: `2px solid ${theme.palette.secondary.main}`,
        color: '#fff'
    },
    list:{
        display:'flex',
        flexDirection: 'column'
    },
    items:{
        padding: '1px 0'
    },

    link:{
        display: 'flex',
        flexDirection: 'row',
        color: '#fff', 
        textTransform: 'capitalize'       
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.secondary.main,
    }
}))

const Products = ({s500}) => {
    const classes = useStyles();
    const links = ['ERP Solution','Banking Solution','HR Management','University Management','Marketing Monitoring']
    return (
        <Grid container direction="column" alignContent={s500 ? "strech" : "center"} justify="center">
            <Typography variant="h5" gutterBottom className={classes.headline}>
                Our Products
            </Typography>
            <ul className={classes.list}>
                {
                    links.map(link => (
                        <li key={link} className={classes.items}>                           
                            <Link to="/" className={classes.link}>
                                <Box component="span" mr={1} className={classes.icon}>
                                    <MdKeyboardArrowRight/>
                                </Box>
                                <Typography variant="subtitle1">
                                    {link}
                                </Typography>   
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </Grid>
    )
}

export default Products
