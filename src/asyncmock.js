const products = [
    {ItemID: "1",  CatID:"1" ,nombre: 'Cerveza Quilmes', precio: 120, img: "../img/quilmes.png"},
    {ItemID: "2",  CatID:"1" ,nombre: 'Cerveza Sol', precio: 130, img: "../img/sol.png"},
    {ItemID: "11", CatID:"2" ,nombre: 'Vodka Smirnoff', precio: 2000, img: "../img/smirnoff.png"},
    {ItemID: "12", CatID:"2" ,nombre: 'Vodka Sky', precio: 1750, img: "../img/sky.png"}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout ( () => {
            resolve(products)
        },100)
    })

}

export const getUnProducto = (id) => {
    return new Promise((resolve) =>{
        setTimeout(     () =>   {
            const producto = products.find(prod => prod.ItemID === id);
            resolve(producto);
        },100)
    })
}

export const getProductosPorCategoria = (idCat) => {
    return new Promise( resolve =>{
        setTimeout( () => {
            const productosCategoria = products.filter(prod => prod.CatID === idCat);
            resolve(productosCategoria);
        },100)
    })
}