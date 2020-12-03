import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

function renderImage(file) {
  return (
    <Img fluid={file.node.childImageSharp.fluid} />
  )
}

const MyImg = function (props) {

  return <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    `}
    render={(data) => {
      const image = data.images.edges.find(
        image => image.node.relativePath === "knight.jpg"
      )
      return(renderImage(image))
    }}
  />
}

export default MyImg;