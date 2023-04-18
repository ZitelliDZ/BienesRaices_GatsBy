import React, { Fragment, useEffect, useState } from 'react'
import { css } from '@emotion/react'
import usePropiedades from '../hooks/usePropiedades'
import PropiedadPreview from './propiedadPreview'
import * as style from '../css/listadoPropiedades.module.css'
import useFiltro from '../hooks/useFiltro'

const ListadoPropiedades = () => {

  const resultado = usePropiedades()

  const [propiedades ] = useState(resultado)
  const [filtradas, setFiltradas ] = useState([])

  const { FiltroUI,categoria } = useFiltro()

  useEffect(() => {
    if (categoria) {
        const filtro = propiedades.filter(propiedad => propiedad.categoria === categoria)
        setFiltradas(filtro)
    }else{
      setFiltradas(propiedades)

    }


  }, [categoria,propiedades])


console.log(categoria)

  return (
    <Fragment>
      <h2 css={css`
      margin: 10rem 0 5rem 0;
    `}>
        Nuestras Propiedades
      </h2>
      {FiltroUI() }
      <ul className={style.propiedades}>
        {filtradas.map(propiedad => { return <PropiedadPreview key={propiedad.id} propiedad={propiedad} /> }
        )}
      </ul>
    </Fragment>
  )
}

export default ListadoPropiedades