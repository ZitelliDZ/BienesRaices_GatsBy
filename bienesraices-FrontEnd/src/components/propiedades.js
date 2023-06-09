import React from 'react'
import Iconos from './iconos'
import styled from '@emotion/styled'

import Image from 'gatsby-image'
import Layout from './layout'
import { graphql } from 'gatsby'


const Contenido = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`


const Sidebar = styled.aside`
  .precio{
    font-size: 2rem;
    color: #75AB00;
  }
  .agente{
    margin-top: 4rem;
    border-radius: 2rem;
    background-color: #75AB00;
    padding: 3rem;
    color: #fff;
    p{
      margin: 0;
    }
  }
`

export const query = graphql`
query ($id: String!) {
  allStrapiPropiedad(filter: {id: {eq: $id}}) {
    nodes {
      nombre
      estacionamiento
      habitaciones
      descripcion {
        data {
          descripcion
        }
      }
      categoria {
        nombre
      }
      agente {
        email
        nombre
        telefono
      }
      wc
      precio
      imagen {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
}
`

const Propiedades = ({ data: { allStrapiPropiedad: { nodes } } }) => {

  const { nombre, descripcion, wc, estacionamiento, habitaciones, agente, imagen, precio } = nodes[0]


  return (
    <Layout>
      <h1>{nombre}</h1>
      <Contenido>
        <main>
          <Image
            fluid={imagen.localFile.childImageSharp.fluid}
          />
          <p>{descripcion.data.descripcion}</p>

        </main>
        <Sidebar>

          <p className='precio'>$ {precio}</p>
          <Iconos
            wc={wc}
            estacionamiento={estacionamiento}
            habitaciones={habitaciones}
          />
          <div className='agente'>
            <h2>Vendedor : </h2>
            <p>{agente.nombre}</p>
            <p>Teléfono : {agente.telefono}</p>
            <p>Email : {agente.email}</p>
          </div>

        </Sidebar>
      </Contenido>
    </Layout>
  )
}

export default Propiedades