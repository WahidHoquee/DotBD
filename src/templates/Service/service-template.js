import React from "react"
import { graphql } from "gatsby"
import { Container } from "@material-ui/core"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import Image from "gatsby-image"

import Layout from "../../layout"
import styles from "./service-template.module.scss"

export const data = graphql`
  query($slug: String!) {
    service: contentfulService(slug: { eq: $slug }) {
      title
      details {
        raw
      }
      cover {
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      extensions {
        raw
      }
    }
  }
`

const serviceTemplate = props => {
  const config = {
    renderMark: {},
    renderNode: {
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className={styles.h3}>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className={styles.h4}>{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className={styles.h5}>{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h5 className={styles.h5}>{children}</h5>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={styles.body}>{children}</p>
      ),
      [BLOCKS.UL_LIST]: node => (
        <ul className={styles.unorderedList}>
          {node.content.map(cont => (
            <li>{cont.content[0].content[0].value}</li>
          ))}
        </ul>
      ),
      [BLOCKS.OL_LIST]: node => (
        <ul className={styles.orderedList}>
          {node.content.map(cont => (
            <li>{cont.content[0].content[0].value}</li>
          ))}
        </ul>
      ),
      [BLOCKS.EMBEDDED_ASSET]: node => (
        <img
          src={node.data.target.fields.file["en-US"].url}
          alt={node.data.target.fields.title["en-US"]}
        />
      ),
      // [BLOCKS.QUOTE]: node => <Quote content={node.content[0].content[0].value}/>
    },
  }
  // const config = {};
  if (props.data.service) {
    let { title, details, cover, extensions } = props.data.service
    // const date = publishDate.split('-');
    // const dateCalender = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    // const day = date[2];
    // const month = dateCalender[parseInt(date[1])-1];
    return (
      <Layout headline={title} isDetails={true}>
        <div style={{ backgroundColor: "#fff", padding: '3rem 0' }}>
          <Container fluid>
            <article className={styles.article}>
              {details && renderRichText(details, config)}
            </article>

            <div className={styles.imageBlock}>
              {/* <figure> */}
                <Image fluid={cover.fluid} alt={title} className={styles.cover}/>
              {/* </figure> */}
            </div>

            <article className={styles.article}>
              {extensions && renderRichText(extensions, config)}
            </article>
          </Container>
        </div>
      </Layout>
    )
  } else {
    return null
  }
}

export default serviceTemplate
