import React from "react"
import { Grid, Container, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Image from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

// import Menubar from "./Menubar/Menubar"

const Hero = ({ lg, md, sm, xs }) => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
      query {
        file(relativePath: { eq: "hero-section.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
  `);
  return (
    <Container className={classes.hero}>
      <Grid container>
        <Grid item xs={xs ? 0 : sm ? 5 : 6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Image
            fluid={data.file.childImageSharp.fluid}
            className={classes.heroImage}
          />
        </Grid>
        <Grid item xs={xs ? 12 : sm ? 7 : 6} className={classes.bodyText}>
          <h2 className={classes.heroTitle}>Listening to You, Answering with Software</h2>
          <p className={classes.heroSubtitle}>
            For quality Website Development, Software Development and Enterprise Software Solution Dot Bangladesh is the best choice. Providing customized HRM, Accounting and ERP software.
          </p>
          <Button className={classes.button} variant="contained" color="secondary">
            <a href="http://karbar.dot-bd.com/" target="_blank" style={{color: '#fff'}}>View Demo</a>
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

const useStyles = makeStyles(theme => ({
  hero: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -55%)',
    [theme.breakpoints.down('md')]: {
      padding: '0 1rem 0 5rem',
      transform: 'translate(-50%, -50%)',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 6rem 0 8rem',
      transform: 'translate(-50%, -50%)',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0 10rem',
      textAlign: 'center',
      transform: 'translate(-50%, -45%)',
    },
    [theme.breakpoints.down(350)]: {
      padding: '0 1.5rem',
      transform: 'translate(-50%, -40%)',
    },

  },
  heroImage: {
    width: "90%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: "80%",
    },
  },
  bodyText:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 5rem',
    [theme.breakpoints.down('sm')]: {
      padding: 0
    },
  },
  heroTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    marginBottom: '2rem',
    color: '#fff',
    lineHeight: '5rem',
    fontSize: '4rem',
    [theme.breakpoints.down('sm')]: {
      lineHeight: '4rem',
      fontSize: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      lineHeight: '4.5rem',
      fontSize: '3.5rem',
    },
    [theme.breakpoints.down(350)]: {
      lineHeight: '4rem',
      fontSize: '3rem',
    },
  },
  heroSubtitle:{
    color: '#fff',
    lineHeight: '2.8rem',
    fontSize: '1.7rem',
    fontWeight: 300,
    marginBottom: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
      lineHeight: '3rem',
    },
    [theme.breakpoints.down(350)]: {
      fontSize: '1.8rem',
      lineHeight: '2.5rem',
    },
  },
  button:{
    alignSelf: 'start',
    backgroundColor: 'rgb(219, 75, 82)',
    padding: '1rem 3rem',
    fontSize: 16,
    [theme.breakpoints.down('xs')]: {
      margin: '1rem auto'
    },
    [theme.breakpoints.down(350)]: {
      margin: '1.5rem auto',
      padding: '1rem 2rem',
    },
  }
}))

export default Hero;
