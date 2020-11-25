import React from "react"
import { makeStyles } from "@material-ui/styles"
import { Grid, Container } from "@material-ui/core"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Megamenu = ({ style, linkStyle, data }) => {
    const classes = useStyles()
    return (
        <div className={style}>
            <Container>
                <Grid container style={{padding: '0rem 3rem'}}>
                    {data.map(({title, menu}) => (
                        <Grid item xs={3} className={classes.columnMenu} key={title}>
                            <h6 className={classes.title}>{title}</h6>
                            <ul className={classes.menu}>
                                {menu && menu.map(({path, title}) => 
                                    <li key={title}>
                                        <AniLink fade duration={5} to={path} className={linkStyle}>
                                            {title}
                                        </AniLink>
                                    </li>
                                )}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    columnMenu:{
        padding: '4rem 0'
    },
    title:{
        fontSize: '1.8rem',
        fontWeight: 500,
        fontFamily: '"Poppins", sans-serif',
        color: '#051441',
        marginBottom: '1.5rem',
    },
    menu:{
        left:0
    }
}))

export default Megamenu
