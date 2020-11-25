import { graphql, useStaticQuery } from "gatsby"

const useClientImage = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(
                filter: {
                    sourceInstanceName: { eq: "images" }
                    relativePath: { regex: "/clients/" }
                }
            ) {
                nodes {
                    base
                    image:childImageSharp {
                        fixed(height: 120, width:120) {
                            ...GatsbyImageSharpFixed_withWebp_tracedSVG
                        }
                    }
                }
            }
        }
    `)
        console.log(data)
    return data.allFile.nodes
}

export default useClientImage
