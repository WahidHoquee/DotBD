import React from "react"
import { Container, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Product from "./Product";
import items from "../../../data/Products";
import Title from '../../Utils/Title'

const useStyles = makeStyles(theme => ({
    root: {
        padding: "100px",
        background: "#fff",
        boxShadow: "2px 2px 30px 0 rgba(0,0,0,.05)",
    }
}))

const Products = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Container fixed>
                <Title>Our Service</Title>
                <Grid container spacing={5}>
                    {
                        items.map(({id,icon,title,description}) => (
                            <Product key={title} id={id} icon = {icon} title={title} description={description} />
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default Products
