const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const serviceData = await graphql(`
    query {
      services: allContentfulService {
        nodes {
          slug
        }
      }
    }
  `)

  if (serviceData.errors)
    reporter.panic(
      "Failed to retrive Service Data from Contentful",
      JSON.stringify(serviceData.errors)
    )

    serviceData.data.services.nodes.forEach(service => {
    actions.createPage({
      path: `service/${service.slug}`,
      component: require.resolve("./src/templates/Service/service-template.js"),
      context: {
        slug: service.slug,
      },
    })
  })
}
