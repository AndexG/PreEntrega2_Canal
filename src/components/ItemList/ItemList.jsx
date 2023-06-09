import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products}) => {
  return (
    <div className='contenedorProductos'>
        {
          products.map(prod => {
            return <Item key={prod.ItemID} {...prod} />
          })
        }
    </div>
  )
}

export default ItemList