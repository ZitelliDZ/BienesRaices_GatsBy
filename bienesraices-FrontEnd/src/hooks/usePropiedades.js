import { graphql,useStaticQuery } from 'gatsby'

const usePropiedades = () => {

    const datos = useStaticQuery(graphql`
    query {
        allStrapiPropiedad {
          nodes {
            nombre
            descripcion {
              data {
                descripcion
              }
            }
            id
            wc
            precio
            estacionamiento
            habitaciones
            categoria {
              nombre
            }
            agente {
              nombre
              telefono
              email
            }
            imagen {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600, maxHeight: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `)

    

    return (datos.allStrapiPropiedad.nodes.map(inicio => ({
        nombreAg: inicio.agente.nombre,
        telefonoAg: inicio.agente.telefono,
        emailAg: inicio.agente.email,
        nombre: inicio.nombre,
        precio: inicio.precio,
        categoria: inicio.categoria.nombre,
        wc: inicio.wc,
        habitaciones: inicio.habitaciones,
        estacionamiento: inicio.estacionamiento,
        descripcion: inicio.descripcion.data.descripcion,
        imagen: inicio.imagen,
        id:inicio.id
    })))
}

export default usePropiedades