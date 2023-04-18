import React from 'react'
import styled from '@emotion/styled'

import Image from 'gatsby-image'
import Layout from './layout'
import { graphql } from 'gatsby'
import {css} from '@emotion/react'
import ListadoPropiedades from './listadoPropiedades'


const ContenidoPagina = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`



export const query = graphql`

query ($id: String!) {
    allStrapiPagina(filter: {id: {eq: $id}}) {
      nodes {
        nombre
        contenido
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


const Paginas = ({ data: { allStrapiPagina: { nodes } } }) => {

    
    const { nombre, contenido, imagen } = nodes[0]


    return (
        <Layout>
            <main className='contenedor' >
                <h1 css={css`
                  margin: 5rem;
                `}>{nombre}</h1>
                <ContenidoPagina>
                    <Image
                        fluid={imagen.localFile.childImageSharp.fluid}
                    />

                <p>{contenido}</p>
                </ContenidoPagina>

            </main>

            {nombre === "Propiedades" && (
                <ListadoPropiedades />
            )}

        </Layout>
    )
}

export default Paginas