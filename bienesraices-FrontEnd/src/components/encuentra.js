import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'
import * as style from '../css/hero.module.css'

const ImagenBackGround = styled(BackgroundImage)`
    height: 300px;
`

const Encuentra = () => {

    const {imagen} = useStaticQuery(graphql`
    query  {
        imagen: file(relativePath: {eq: "encuentra.jpg"}) {
            sharp: childImageSharp {
                fluid(maxWidth: 1500) {
                    ...GatsbyImageSharpFluid_withWebp
                }
              }
        }
      }
    `)


    
  return (
    <ImagenBackGround tag='section' fluid={imagen.sharp.fluid}>
        <div className={style.imagenbg}>
            <h3 className={imagen.titulo}>Encuentra la casa de tus sueños</h3>
            <p >15 años de experiencia</p>
        </div>
    </ImagenBackGround>
  )
}

export default Encuentra