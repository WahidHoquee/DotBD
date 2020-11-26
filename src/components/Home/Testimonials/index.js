import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core'
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
    const data = useStaticQuery(getBGImage);
    
    const md = useMediaQuery(theme => theme.breakpoints.down('md'));
    const sm = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));

    const settings = {
      slidesToShow: xs ? 1 : sm ? 2 : 3,
      slidesToScroll: sm ? 1 : 2,
      adaptiveHeight: true,
      speed: 1000,
      autoplay: true,
      className: "center",
      centerMode: sm ? false : true,
      infinite: true,
      // centerPadding: "60px",
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
              testimonials.map(({ avatar, name, details, review }) => (
                <Testimonial key={name} avatar={avatar} name={name} details={details} review={review}/>
              ))
            }
          </Slider>
        </div>
      </BackgroundImage>
    )
}
export default Testimonials;