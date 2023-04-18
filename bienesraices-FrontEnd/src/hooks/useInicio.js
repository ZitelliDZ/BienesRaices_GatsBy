
import { graphql, useStaticQuery } from "gatsby"


const useInicio = () => {

    const resultado = useStaticQuery(
        graphql`
        query {
            allStrapiPagina(filter: {nombre: {eq: "Inicio"}}) {
              nodes {
                id
                nombre
                contenido
                imagen {
                  url
                  localFile {
                    childrenImageSharp {
                      fluid(maxWidth: 1400 ) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
              }
            }
          }
        `
    )


    return (resultado.allStrapiPagina.nodes.map(inicio => ({
        nombre: inicio.nombre,
        contenido: inicio.contenido,
        imagen: inicio.imagen
    })))
}

export default useInicio