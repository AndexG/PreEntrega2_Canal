import './ItemDetail.css'

const ItemDetail = ({ItemID,nombre,precio,img}) => {
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre}</h2>
        <img src={img} alt={nombre} />
        <h3>Precio: {precio}</h3>
        <h3>ID: {ItemID}</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Culpa dolor neque dicta error impedit, ea nam nihil officia nesciunt, 
        inventore necessitatibus facere officiis iusto omnis dolores 
        iste reiciendis explicabo magnam.</p>
        
    </div>
  )
}

export default ItemDetail