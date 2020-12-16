import React from "react"
import { ThemeProvider } from "@material-ui/core"
import { useMediaQuery, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { Location } from "@reach/router"
import { Helmet } from "react-helmet"
import MessengerCustomerChat from "react-messenger-customer-chat"
import useSiteMetadata from "../hooks/useSiteMetadata"

import "./index.scss"
import theme from "../data/ThemeProvider"

import Header from "./Header"
import Proposal from "./Proposal"
import Footer from "./Footer"

import Hero from "../components/Home/Hero"

const Layout = props => {
  const classes = useStyles()

  const { title, description } = useSiteMetadata()
  const { isHome, isDetails, isBlog, headline, category, author } = props

  const lg = useMediaQuery(theme => theme.breakpoints.down("lg"))
  const md = useMediaQuery(theme => theme.breakpoints.down("md"))
  const sm = useMediaQuery(theme => theme.breakpoints.down("sm"))
  const xs = useMediaQuery(theme => theme.breakpoints.down("xs"))
  const screens = { lg, md, sm, xs }

  return (
    <ThemeProvider theme={theme}>
      <Location>
        {({ location }) => (
          <>
            <Helmet>
              <html lang="en" />
              <title>{title}</title>
              <meta name="description" content={description} />
            </Helmet>
            <Header location={location} {...screens}>
              {/* Home page */}
              {isHome && !isDetails && <Hero {...screens} />}

              {/* Blog Page */}
              {!isHome && isBlog && (
                <Container style={md ? { padding: "0 2rem" } : null}>
                  <h2 className={classes.heroTitle}>{headline}</h2>
                </Container>
              )}
              {/* Others Page */}
              {!isHome && !isDetails && (
                <h2 className={classes.heroTitle}>{headline}</h2>
              )}
              {/* Auto Generated Details Page */}
              {!isHome && isDetails && (
                <h2 className={classes.detailTitle}>{headline}</h2>
              )}
            </Header>
            <main>{props.children}</main>
            {!props.isBlog && <Proposal {...screens} />}
            <Footer {...screens} />
            <MessengerCustomerChat
              pageId="104903164358262"
              appId="447990572562411"
              themeColor="#f80040"
            />
          </>
        )}
      </Location>
    </ThemeProvider>
  )
}

const useStyles = makeStyles(theme => ({
  heroTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    marginBottom: "2rem",
    color: "#fff",
    lineHeight: "12rem",
    textAlign: "center",
    fontSize: "10rem !important",
    letterSpacing: 4,
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.down(800)]: {
      top: "48%",
    },
    [theme.breakpoints.down(400)]: {
      top: "50%",
    },
  },
  detailTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    marginBottom: "2rem",
    color: "#fff",
    lineHeight: "10rem",
    textAlign: "center",
    fontSize: "8rem !important",
    letterSpacing: 4,
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.down(800)]: {
      top: "48%",
    },
    [theme.breakpoints.down(400)]: {
      top: "50%",
      fontSize: "6rem !important",
      lineHeight: "10rem",
    },
    [theme.breakpoints.down(350)]: {
      fontSize: "4rem !important",
      lineHeight: "6rem",
    },
  },
  heroSubtitle: {
    color: "#fff",
    lineHeight: "2.8rem",
    fontSize: "1.7rem",
    fontWeight: 300,
    marginBottom: "2rem",
  },
  subTitle: {
    textAlign: "center",
    fontSize: "1.6rem",
    lineHeight: "1rem",
    color: "white",
    fontWeight: 300,
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
