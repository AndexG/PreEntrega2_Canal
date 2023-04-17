import './ItemListContainer.css';
import {useState, useEffect} from 'react';
import { getProducts, getProductosPorCategoria } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const [products,setProducts] = useState([]);

  const {CatID} = useParams();

  useEffect( () => {

    const filtrarProductos = CatID ? getProductosPorCategoria : getProducts;

    filtrarProductos(CatID)
      .then(response => setProducts(response))
      .catch(error => console.error(error))

  }, [CatID])

  return (
    <div>
        <h2>Productos</h2>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer