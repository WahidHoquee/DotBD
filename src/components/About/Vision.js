import React from 'react'
import { useMediaQuery, Grid, Typography, Box } from "@material-ui/core"
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const Vision = () => {
    const md750 = useMediaQuery(theme => theme.breakpoints.down(750));
    const md = useMediaQuery(theme => theme.breakpoints.down('md'));
    const xs = useMediaQuery(theme => theme.breakpoints.down(500));
    const xs380 = useMediaQuery(theme => theme.breakpoints.down(380));

    const image = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "about-vision.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        ...GatsbyImageSharpFluidLimitPresentationSize
                    }
                }
            }
        }    
    `);
    return (
        <Box style={{padding: xs380 ? '5rem 2rem' : xs ? '10rem 5rem' : md750 ? '6rem 1rem' : md ? '10rem 5rem' : '10rem 0'}}>
            <Grid container alignItems="center">
                <Grid item xs={xs ? 12 : 6}>
                    <Typography variant="h4" gutterBottom className="heading-secondary">Our Vision</Typography>
                    <Typography 
                        variant="body1" gutterBottom 
                        style={{textJustify: 'inter-word', textAlign: 'justify', marginBottom: xs ? '4rem' : 'none'}}
                    >
                        Our Vision is to be in a leadership position in the creation of an environment where our local
                        resources, people and processes, will provide strategic and operational management advice, software
                        solutions and trained professionals for the country and the international market.  
                    </Typography>
                </Grid>
                <Grid item xs={xs ? 12 : 6} style={{textAlign:'center'}}>
                    <Image fluid={image.file.childImageSharp.fluid}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Vision
