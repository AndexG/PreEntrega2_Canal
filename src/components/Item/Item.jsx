import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ItemID,nombre,precio,img}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h3 className='titleProducto'>{nombre}</h3>
        <p className='textProducto'>Valor:{precio}$ <br /> ID:{ItemID}</p>
        <Link to={`/item/${ItemID}`}><button className='btnProducto'>Ver Detalle</button></Link>
    </div>
  )
}

export default Item