/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const urlSlug = require('url-slug')
exports.createPages = async ({ actions, graphql, reporter }) => {


  const resultado = await graphql(`
  
  query {
    allStrapiPagina{
      nodes{
        nombre
        id
      }
    }
    allStrapiPropiedad {
      nodes {
        id
        nombre
      }
    }
  }
  `)

  if (resultado.errors) {
    reporter.panic('No hubo resultados', resultado.errors)
  }

  const paginas = resultado.data.allStrapiPagina.nodes;
  const propiedades = resultado.data.allStrapiPropiedad.nodes;

  paginas.forEach(pagina => {
    const { createPage } = actions
    createPage({
      path:  urlSlug(pagina.nombre),
      component: require.resolve("./src/components/paginas.js"),
      context: {
        id: pagina.id
      },
    })
  });

  //crear templates para propiedades
  propiedades.forEach(propiedad => {
    const { createPage } = actions
    createPage({
      path:  urlSlug(propiedad.nombre),
      component: require.resolve("./src/components/propiedades.js"),
      context: {
        id: propiedad.id
      },
    })
  });

}
