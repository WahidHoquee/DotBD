// import { graphql, useStaticQuery } from "gatsby";

// const usePostData = () => {
//     const data = useStaticQuery(graphql`
//         query {
//             allMdx {
//                 nodes {
//                     frontmatter{
//                         title
//                         slug
//                     }
//                     excerpt
//                 }
//             }
//         }      
//     `)
//     return data.allMdx.nodes.map(node => ({
//         title: node.frontmatter.title,
//         slug: node.frontmatter.slug,
//         body: node.excerpt,
//     }))
// }

// export default usePostData;