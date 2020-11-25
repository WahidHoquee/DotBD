import React from "react";
import { ThemeProvider } from "@material-ui/core"
import { useMediaQuery, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { useStaticQuery, graphql, Link } from "gatsby"
import {Helmet} from "react-helmet";
import MessengerCustomerChat from "react-messenger-customer-chat"
import useSiteMetadata from '../hooks/useSiteMetadata'

import "./index.scss"
import theme from '../data/ThemeProvider'

import Header from "./Header"
import Proposal from "./Proposal"
import Footer from "./Footer"

import Hero from "../components/Home/Hero";

const Layout = props => {
    const classes = useStyles();

    const { title, description } = useSiteMetadata();
    const { isHome, isBlog, headline, category, author, readTime } = props;

    const lg = useMediaQuery(theme => theme.breakpoints.down('lg'));
    const md = useMediaQuery(theme => theme.breakpoints.down('md'));
    const sm = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const screens = { lg, md, sm, xs }

    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <html lang="en"/>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <Header {...screens}>
                {/* Home page */}
                {isHome && !isBlog && <Hero {...screens}/>} 

                {/* Blog Page */}
                {!isHome && isBlog && (
                    <Container style={props.screens.md ? {padding: '0 2rem'} : null}>
                        <h4 className={classes.categoryTitle}>{category.metaTag}</h4>
                        <h2 className={`${classes.heroTitle} ${classes.nonHomeTitle}`}>{headline}</h2>
                        <h5 style={{textAlign: "center"}}>
                            <Link to={author.facebook} className={classes.subTitle}>{author.name}</Link>
                        </h5>
                    </Container>
                )}

                {/* Others Page */}
                {!isHome && !isBlog && (
                    <h2 className={`${classes.heroTitle} ${classes.nonHomeTitle}`}>{headline}</h2>
                )}
            </Header>
            <main>{props.children}</main>
            {!props.isBlog && <Proposal {...screens}/>}
            <Footer  {...screens}/>
            <MessengerCustomerChat
                pageId="104903164358262"
                appId="447990572562411"
                themeColor="#f80040"
            />
        </ThemeProvider>
    )
}

const useStyles = makeStyles(theme => ({
    heroTitle: {
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 700,
        marginBottom: '2rem',
        color: '#fff',
        lineHeight: '5rem',
        fontSize: '4rem'
    },
    heroSubtitle:{
        color: '#fff',
        lineHeight: '2.8rem',
        fontSize: '1.7rem',
        fontWeight: 300,
        marginBottom: '2rem'
    },
    nonHomeTitle:{
        textAlign: 'center',
        fontSize: '10rem !important',
        letterSpacing: 4,
        transform: 'translate(0, 3.5rem)'
    },
    subTitle:{
        textAlign: "center",
        fontSize: "1.6rem",
        lineHeight: "1rem",
        color: "white",
        fontWeight: 300
    },
    categoryTitle: {
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: 300,
        marginBottom: "1.5rem",
        letterSpacing: 2,
        color: "#fd5959",
    },
}))

export default Layout
