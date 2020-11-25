import React from 'react'
import { Grid, Typography, Container } from '@material-ui/core'
import { graphql, useStaticQuery } from "gatsby"
import { TiArrowForward } from 'react-icons/ti'
import Image from 'gatsby-image'

import classes from "./index.module.scss"
import Title from '../../Utils/Title'

const getImage = graphql`
{
    whyUs:file(relativePath:{eq: "whyUs.png"}){
      childImageSharp{
        fluid{
            ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}`

const whyUs = [
    'Powerful, Effective & User-friendly Windows based software',
    'Qualified & Experienced team for Software Development',
    'International Quality standard software development',
    'Comprehensive warranty / maintenance',
    'Multi-User Capability',
    'Free Up-gradation',
    'Fast and prompt customer service with guaranteed satisfaction',
    'Ambitious in long-term customer relationship',
    'Research and development for continuous growth & quality',
    'Four level Security',
    'Regular Backup & Restore facilities'
];

const WhyUs = () => {
    const data = useStaticQuery(getImage);
    
    return (
        <div className={classes.root}>
            <Container fixed>
                <Title>Why Select Us?</Title>

                <Grid container justify="center" alignContent="center" alignItems="center">
                    <Grid item xs={6}>
                    {whyUs.map(why => (
                            <Grid container direction="row" alignItems="center" key={why}>
                                <Grid item>
                                    <TiArrowForward className={classes.icon}/>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">{why}</Typography>
                                </Grid>                       
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item xs={6}>
                        <Image fluid={data.whyUs.childImageSharp.fluid} alt="whyUs"/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default WhyUs
