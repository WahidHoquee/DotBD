import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    product: {
        padding: "3rem",
        height: '30rem',
        margin: '0 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderTop: "6px solid transparent",
        borderRadius: 6,
        transition: "all 0.3s linear",
        cursor: "pointer",
        boxShadow: " 0 5px 10px 0 rgba(64, 1, 4, 0.1), 0 -6px 0 0 rgba(248, 99, 107, 0.004)",
        [theme.breakpoints.down(1450)]: {
            height: '32rem',
        },
        [theme.breakpoints.down('sm')]: {
           padding: "10rem 5rem",
        },
        [theme.breakpoints.down(750)]: {
            padding: "10rem 2rem",
        },
        [theme.breakpoints.down('xs')]: {
            padding: "10rem 5rem",
        },
        "&:hover": {
            borderColor: "#f6626a",
            background: "#fff",
            boxShadow: " 0 50px 100px 0 rgba(64, 1, 4, 0.1), 0 -6px 0 0 rgba(248, 99, 107, 0.004)",
        },
    },
    iconHolder: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "9rem",
        height: "8rem",
        // padding: '3rem',
        background: "#fff7f7",
        borderRadius: 5,
        lineHeight: "6rem",
        marginBottom: "3.5rem",
    },
    list: {
        display: "flex",
        flexDirection: "column",
    },
    items: {
        padding: "1px 0",
    },

    heading: {
        color: '#2c2c51',
        fontSize: '2rem',
        fontWeight: 600,
        marginBottom: '2rem',
        transition: 'all 0.3s linear',
        fontFamily: "'Poppins', sans-serif",

    },
}))

const Product = ({ id, icon, title, description }) => {
    const classes = useStyles()
    return (
        <div className={classes.product}>
            <div className={classes.iconHolder}>
                <img src={icon[id]} alt={title} width="50" height="50" />
            </div>
            <h3 className={classes.heading}>{title}</h3>
            <ul className={classes.list}>
                {description.map(list => (
                    <li key={list} className={classes.items}>
                        {list}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Product
