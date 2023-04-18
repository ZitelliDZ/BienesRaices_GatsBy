import React from 'react'
import { Link } from 'gatsby'
import Navegacion from './navegacion'
import { css } from '@emotion/react'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {

  //consulta logo
  const {logo} = useStaticQuery(graphql`
  query MyQuery {
    logo: file(relativePath: {eq: "logo.svg"}) {
      publicURL
    }
  }
  `)


  
  return (
    <header
      css={css`
      padding: 1rem;
      background: linear-gradient(90deg, rgba(18,43,55,1) 0%, rgba(0,81,119,1) 100%);
      
      `}

    >
      <div
        css={css`
          padding: 1rem;
          max-width: 120rem;
          margin: 0 auto;
          text-align: center;
          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        
        `}
      >
        <Link to={'/'}>
          <img src={logo.publicURL} alt="Logotipo Bienes Raices" />
        </Link>
        <Navegacion />
      </div>
    </header>
  )
}

export default Header