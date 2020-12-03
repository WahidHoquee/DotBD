import React from 'react'
import { useMediaQuery, Grid, Typography, Box } from "@material-ui/core"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby";

const Mission = () => {
    const md750 = useMediaQuery(theme => theme.breakpoints.down(750));
    const md = useMediaQuery(theme => theme.breakpoints.down('md'));
    const xs = useMediaQuery(theme => theme.breakpoints.down(500));
    const xs380 = useMediaQuery(theme => theme.breakpoints.down(380));

    const image = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "about-mission.png" }) {
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
                <Grid item xs={xs ? 12 : 6} style={{textAlign:'center', marginBottom: xs ? '1rem' : 'none'}}>
                    <Image fluid={image.file.childImageSharp.fluid}/>
                </Grid>
                <Grid item xs={xs ? 12 : 6}>
                    <Typography variant="h4" gutterBottom className="heading-secondary">Our Mission</Typography>
                    <Typography variant="body1" gutterBottom style={{textJustify: 'inter-word', textAlign: 'justify'}}>
                        To become a lead player in the enterprise development and Information and Communication Technology
                        market in Bangladesh, and help improve the competitive edge of our customers by providing quality
                        management advice and ICT solutions
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Mission
