import React from "react"
import { useMediaQuery, Grid, Typography, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { graphql, useStaticQuery } from "gatsby"
import { TiArrowForward } from "react-icons/ti"
import Image from "gatsby-image"

import Title from "../../Utils/Title"

const getImage = graphql`
  {
    whyUs: file(relativePath: { eq: "whyUs.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const whyUs = [
  "Powerful, Effective & User-friendly Windows based software",
  "Qualified & Experienced team for Software Development",
  "International Quality standard software development",
  "Comprehensive warranty / maintenance",
  "Multi-User Capability",
  "Free Up-gradation",
  "Fast and prompt customer service with guaranteed satisfaction",
  "Ambitious in long-term customer relationship",
  "Research and development for continuous growth & quality",
  "Four level Security",
  "Regular Backup & Restore facilities",
]

const useStyles = makeStyles(theme => ({
  root: {
    padding: "10rem 0",
    [theme.breakpoints.down(1390)]: {
      padding: "10rem 5rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "12rem 5rem 5rem",
    },
    // [theme.breakpoints.down(750)]: {
    //   padding: "10rem 0rem",
    // },
  },
  icon: {
    marginRight: "1rem",
    color: "#f80040",
    transform: "translateY(1px)",
  },
  image: {
    width:'85%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      width:'75%',
    },
    [theme.breakpoints.down('sm')]: {
      width:'50rem',
      marginBottom: '5rem'
    },
    [theme.breakpoints.down('sm')]: {
      width:'35rem',
      marginBottom: '5rem'
    },

  }
}))

const WhyUs = () => {
  const classes = useStyles()
  const data = useStaticQuery(getImage)
  
  const sm = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const xs = useMediaQuery(theme => theme.breakpoints.down(450));

  return (
      <Container fluid className={classes.root}>
        <Title>Why Select Us?</Title>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction={sm ? "column-reverse" : null}
          style={{padding: '3rem 0'}}
        >
          <Grid item xs={sm ? 12 : 7}>
            {whyUs.map(why => (
              <div style={xs ? {fontSize:'1.8rem', marginBottom: 7} : {fontSize:'2rem', marginBottom: 10}}>
                <span><TiArrowForward className={classes.icon} /></span>   
                <Typography variant="p">{why}</Typography>
              </div>
            ))}
          </Grid>
          <Grid item xs={sm ? 12 : 5}>
            <Image fluid={data.whyUs.childImageSharp.fluid} alt="whyUs" className={classes.image} />
          </Grid>
        </Grid>
      </Container>
  )
}

export default WhyUs
