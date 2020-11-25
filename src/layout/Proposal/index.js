import React from "react"
import { Container, Grid, TextField, MenuItem, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import form from "../../images/RFP-icon.svg"
import Title from '../../components/Utils/Title'

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        padding: '10rem',
        boxShadow: "2px 2px 30px 0 rgba(0,0,0,.05)",
        backgroundColor: '#fffafa',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/climpek.png")',
        [theme.breakpoints.down('sm')]: {
            padding: '10rem 5rem',
        },      
        [theme.breakpoints.down(480)]: {
            padding: '10rem 1rem',
        },      
    },
    input: {
        width: "80%",
        margin: "15px 0",
    },
    subinputcontainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width:'80%',
        margin: "15px 0",
    },
    subinput: {
        width: '48%',
    },
    image: {
        height: "50rem",
        width: "50rem",
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },      
    },
}))

const category = [
    {
        value: "webdev",
        label: "Web Developement",
    },
    {
        value: "erp",
        label: "ERP Software",
    },
    {
        value: "software",
        label: "Software Developement",
    },
    {
        value: "design",
        label: "Web Design",
    },
]

const Proposal = ({ lg, md, sm, xs }) => {
    const classes = useStyles()
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Container fluid>
                <Title>Request for Proposal</Title>
                <Grid container justify="center" alignContent="center">
                    <Grid item container direction="column" justify="center" align="center" xs={sm ? 12 : 8}>
                        <Grid item>
                            <TextField
                                id="outlined-basic"
                                label="Full Name"
                                variant="outlined"
                                className={classes.input}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="outlined-basic"
                                label="Company Name"
                                variant="outlined"
                                className={classes.input}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Product Category"
                                value={category}
                                variant="outlined"
                                className={classes.input}
                            >
                                {category.map(option => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item>
                            <TextField
                                id="outlined-basic"
                                label="Address"
                                variant="outlined"
                                className={classes.input}
                            />
                        </Grid>
                        <Grid item>
                            <Box className={classes.subinputcontainer}>
                                <TextField
                                    id="outlined-basic"
                                    label="Phone Number"
                                    variant="outlined"
                                    className={classes.subinput}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Email Address"
                                    variant="outlined"
                                    className={classes.subinput}
                                />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        container
                        xs={4}
                        justify="center"
                        alignContent="center"
                    >
                        <img
                            src={form}
                            alt="rfp form"
                            className={classes.image}
                        />
                    </Grid>
                </Grid>
            </Container>
        </form>
    )
}

export default Proposal
