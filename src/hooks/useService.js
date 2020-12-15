import { graphql, useStaticQuery } from "gatsby"

const useService = () => {
  const data = useStaticQuery(graphql`
    query {
      services: allContentfulService {
        nodes {
          title
        }
      }
    }
  `)
  console.log(data.services.nodes);
  return data.services.nodes
}

export default useService

// query{
//   site{
//       siteMetadata{
//           title
//           description
//       }
//   }
// }
