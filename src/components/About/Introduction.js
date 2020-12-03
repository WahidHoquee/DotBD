import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby";
import { useMediaQuery, Grid, Typography, Box } from "@material-ui/core"


const Introduction = () => {
    const md750 = useMediaQuery(theme => theme.breakpoints.down(750));
    const md = useMediaQuery(theme => theme.breakpoints.down('md'));
    const sm = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const xs = useMediaQuery(theme => theme.breakpoints.down(500));
    const xs380 = useMediaQuery(theme => theme.breakpoints.down(380));
  
    const image = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "about-introduction.png" }) {
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
            <Grid container spacing={sm ? 3: 6}>
                <Grid item xs={xs ? 12 : 6} style={{alignSelf: "center"}}>
                    <Typography variant="h4" gutterBottom className="heading-secondary">
                        Introduction
                    </Typography>
                    <Typography variant="body1" gutterBottom style={{textJustify: 'inter-word', textAlign: 'justify'}}>
                        DOT-BD, a software solution house, started life as MHCT in 1997. It was restructured as a management & ICT
                        consultancy after a merger and renamed dot-bd in 2004. Dot has expanded the range of its services and became an
                        organizational development consultancy.
                    </Typography>
                    <Typography variant="body1" style={{textJustify: 'inter-word', textAlign: 'justify'}}>
                        The new company's operational strength comes from its product innovation and market focus. It has in-house
                        expertise in MIS, Systems Analysis, GIS and Programming.dot also has an extensive network of consultants with
                        diverse expertise.
                    </Typography>
                    <Typography 
                        variant="body1" 
                        style={{textJustify: 'inter-word', textAlign: 'justify', marginBottom: xs ? '1rem' : 'none'}}
                    >
                        The recent trend of radical migration of enterprises from centralized computing to workgroupmethod driven by the flexibility of Distributed Computing has been the basis of dot's own marketpositioning. Distributed Object Technology analyses effectiveness of available tools in information management and recommends the client for customizing system and applications to uniquely address the issues.
                    </Typography>
                </Grid>
                <Grid item xs={xs ? 12 : 6} style={{textAlign:'center', alignSelf: "center"}}>
                    <Image fluid={image.file.childImageSharp.fluid}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Introduction

