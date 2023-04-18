import React from 'react'
import Layout from '../components/layout'
import useInicio from '../hooks/useInicio'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import * as style from '../css/hero.module.css'
import Encuentra from '../components/encuentra'
import ListadoPropiedades from '../components/listadoPropiedades'

const ImagenBackGround = styled(BackgroundImage)`
 height: 600px;
`

const Index = () => {

   const inicio = useInicio()

   const { nombre, contenido, imagen } = inicio[0]

    
  return (
    <Layout>
      <ImagenBackGround
        tag='section'
        fluid={imagen.localFile.childrenImageSharp[0].fluid}
        

      >
        <div className={style.imagenbg}>
          <h1 className={style.titulo}>Ventas de Casas y departamentos exclusivos</h1>
        </div>
      </ImagenBackGround>
        <main>
          <div
            css={css`
              max-width: 800px;
              margin: 0 auto;
              
            `}
          >
            <h1 css={css`
              margin: 10rem 0 5rem 0;
            
            `} >{nombre}</h1>
            <p
              css={css`
                text-align: center;
                margin-bottom: 10rem;
              `}
            >{contenido}</p>
          </div>
        </main>

        <Encuentra /> 
        <ListadoPropiedades />
    </Layout>
  )
}

export default Index