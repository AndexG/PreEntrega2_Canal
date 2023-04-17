import React from 'react'
import './CartWidget.css'

const CartWidget = () => {

    const cantidad = 0

  return (
    <>
      <img className='cart-widget' src="https://thumbs.dreamstime.com/b/carro-de-compras-abstracto-sobre-ruedas-un-vector-supermercado-carreta-comestibles-abstracta-la-ilustraci%C3%B3n-vectorial-209373747.jpg" alt="Cart Widget" />

      <p>Llevas comprando: {cantidad}</p>

    </>
  )
}

export default CartWidget