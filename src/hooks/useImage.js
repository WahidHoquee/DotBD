// import { graphql, useStaticQuery } from "gatsby"

// const useImage = (fileName) => {
//     const data = useStaticQuery(graphql`
//         query {
//             file(relativePath: { eq: "${fileName}" }) {
//                 childImageSharp {
//                     fluid {
//                         ...GatsbyImageSharpFluid_withWebp
//                     }
//                 }
//             }
//         }
//     `)
//     return data.file.childImageSharp.fluid;
// }

// export default useImage;
