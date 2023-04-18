import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

const Formulario = styled.form`
    width: 100%;
    display: flex;
    border: 1px solid #e1e1e1;
    max-width: 1200px;
    margin: 2rem auto 0 auto;
    
`
const Select = styled.select`
    border-radius: 10px;
    flex: 1;
    padding: 1rem;
    appearance: none;
    border: none;
    font-family: 'Lato',sans-serif;
`

const useFiltro = () => {

  const [categoria,setCategoria] = useState('')

   const {data} = useStaticQuery(graphql`
    query {
     data: allStrapiCategoria {
        nodes {
          nombre
          id
        }
      }
    }
     `)


     
  
  const FiltroUI = () => (

    <Formulario>
      <Select onChange={e => setCategoria(e.target.value)} value={categoria} >
        <option value="">-- Filtrar --</option>
        {data.nodes.map(opcion =>
         (<option key={opcion.id} value={opcion.nombre}>{opcion.nombre}</option>)
        )}
      </Select>
    </Formulario>
  )


  return {
    FiltroUI,
    categoria
  }
}



export default useFiltro