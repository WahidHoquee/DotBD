// import React from "react"
// import { graphql } from "gatsby"
// import { Box, Typography, Container } from "@material-ui/core"
// import { BLOCKS, MARKS } from "@contentful/rich-text-types"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// import Image from "gatsby-image"
// // import VisibilityIcon from '@material-ui/icons/Visibility';
// import WatchLaterIcon from '@material-ui/icons/WatchLater';

// import Layout from "../../layout/layout"
// import styles from "./blog-template.module.scss"
// import Quote from "../../components/Blog/Quote/Quote"
// import CodeBlock from "../../components/Blog/CodeBlock/CodeBlock"

// export const data = graphql`
//     query($slug: String!) {
//         blog: contentfulBlog(slug: { eq: $slug }) {
//             title
//             category {
//                 metaTag
//             }
//             author {
//                 name
//                 facebook
//             }
//             heroImage{
//                 fluid{
//                    ...GatsbyContentfulFluid_withWebp_noBase64
//                 }
//             }
//             readTime
//             publishDate
//             content {
//                 json
//             }
//         }
//     }
// `


// const blogTemplate = (props) => {

//     let line = 0;
//     const config = {
//         renderMark: {
//             [MARKS.CODE]: text => {
//                 line++;
//                 return <CodeBlock code={text} lineNo={line} />
//             },
//         },
//         renderNode: {
//             [BLOCKS.HEADING_1]: (node, children) => <Typography variant="h1">{children}</Typography>,
//             [BLOCKS.HEADING_2]: (node, children) => <Typography variant="h2">{children}</Typography>,
//             [BLOCKS.HEADING_3]: (node, children) => <Typography variant="h3">{children}</Typography>,
//             [BLOCKS.HEADING_4]: (node, children) => <Typography variant="h4">{children}</Typography>,
//             [BLOCKS.HEADING_5]: (node, children) => <Typography variant="h5">{children}</Typography>,
//             [BLOCKS.HEADING_6]: (node, children) => <Typography variant="h6">{children}</Typography>,
//             [BLOCKS.PARAGRAPH]: (node, children) => <Typography className={styles.body}>{children}</Typography>,
//             [BLOCKS.UL_LIST]: node => (
//                 <ul className={styles.unorderedList}>
//                     {node.content.map(cont => <li>{cont.content[0].content[0].value}</li>)}
//                 </ul>
//             ),
//             [BLOCKS.OL_LIST]: node => (
//                 <ul className={styles.orderedList}>
//                     {node.content.map(cont => <li>{cont.content[0].content[0].value}</li>)}
//                 </ul>
//             ),
//             [BLOCKS.EMBEDDED_ASSET]: node => (
//                 <img 
//                     src={node.data.target.fields.file["en-US"].url}
//                     alt={node.data.target.fields.title["en-US"]}
//                 />
//             ),
//             [BLOCKS.QUOTE]: node => <Quote content={node.content[0].content[0].value}/>
//         },
//     }

//     if(props.data.blog){
//         let { category, author, readTime, title, publishDate, content, heroImage } = props.data.blog;
//         const date = publishDate.split('-');
//         const dateCalender = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
//         const day = date[2];
//         const month = dateCalender[parseInt(date[1])-1];    
//         return(
//             <Layout headline={title} author={author} category={category} isBlog={true}>
//                 <Box p={5} style={{backgroundColor:"#fff"}}>
//                     <Container>
//                         <div className={styles.imageBlock}>
//                             <div className={styles.dateLabel}>
//                                 <span className={styles.day}>{day}</span>
//                                 <span className={styles.month}>{month}</span>
//                             </div>
//                             <figure>
//                                 <Image fluid={heroImage.fluid} alt={title} style={{height: '35rem'}}/> 
//                             </figure>
//                             <div className={styles.viewWrapper}>
//                                 {/* <span className={styles.infoWrapper}>
//                                     <VisibilityIcon/> 
//                                     <span className={styles.info}>{day}</span>
//                                 </span> */}
//                                 <span className={styles.infoWrapper}>
//                                     <WatchLaterIcon/> 
//                                     <span className={styles.info}>{readTime} min</span>
//                                 </span>
//                             </div>
//                         </div>
//                         <article className={styles.article}>
//                             {documentToReactComponents(content.json, config)}
//                         </article>
//                     </Container>
//                 </Box>
//             </Layout>
//         )
//     }
//     else{
//         return null;
//     }
// }

// export default blogTemplate
