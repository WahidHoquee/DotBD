import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/styles'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby';

import Testimonial from "./Testimonial";
import testimonials from '../../../data/Testimonials';
import Title from '../../Utils/Title'

const useStyles = makeStyles(theme => ({
  root:{
    overflow: 'visible',
  }
}))

const getBGImage = graphql`
{
  clients:file(relativePath:{eq: "video.jpg"}){
    childImageSharp{
      fluid(quality: 90, maxWidth: 4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

const Testimonials = () => {
    const classes = useStyles();
    const data = useStaticQuery(getBGImage)
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 2,
      adaptiveHeight: true,
      speed: 1000,
      autoplay: true,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
    }
    const backgroundFluidImageStack = [
      data.clients.childImageSharp.fluid,
      `linear-gradient(to bottom, rgba(255,255,255, 0.8), rgba(255,255,255, 0.3))`,      
    ].reverse()
    return (
      <BackgroundImage fluid={backgroundFluidImageStack} style={{padding: '100px 50px'}}>
        <div className={classes.root}>
          <Title>Client Testimonial</Title>
          <Slider {...settings}>
            {
              testimonials.map(({ name, details, review }) => (
                <Testimonial key={name} name={name} details={details} review={review}/>
              ))
            }
          </Slider>
        </div>
      </BackgroundImage>
    )
}
export default Testimonials;