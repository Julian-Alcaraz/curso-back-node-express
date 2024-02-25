const express = require('express');
const {faker} = require('@faker-js/faker');
const app = express();
const port = 3000;
app.listen(port,()=>{
    console.log('mi puerto'+port)
})
app.get('/', (req,res)=>{
    res.send('Hola mi server en express')
})
app.get('/inicio', (req,res)=>{
    res.send('Hola soy inico')
})

app.get('/registrarse', (req,res)=>{
    res.send('Hola soy la registrarse')
})

app.get('/iniciarSesion', (req,res)=>{
    res.send('Hola soy la iniciar sesion')
})

app.get('/carrito', (req,res)=>{
    res.send('Hola soy carrito')
})

app.get('/categorias', (req,res)=>{
    res.send('Hola soy carrito')
})

app.get('/usuarios', (req,res)=>{
    const { limit, offset} = req.query;
    if(limit && offset){
        res.json({
            limit,
            offset
        })
    }else{
        res.send('Hola no hay vlaores')
    }

})

app.get('/productos', (req,res)=>{
    const productos = [];
    const {size}= req.query
    const limit = size || 100 
    for (let i = 0; i < limit; i++) {
        productos.push({
            name: faker.commerce.productName(),
            price: parseInt( faker.commerce.price(),10),
            image: faker.image.imageUrl(),
    })        
    }
    res.json(productos)
})
app.get('/productos/filtro', (req,res)=>{
    // const productos = [];
    // const {size}= req.query
    // const limit = size || 100 
    // for (let i = 0; i < limit; i++) {
    //     productos.push({
    //         name: faker.commerce.productName(),
    //         price: parseInt( faker.commerce.price(),10),
    //         image: faker.image.imageUrl(),
    // })        
    // }
    res.json('Yo soy un filter')
})
app.get('/productos/:id', (req,res)=>{
    const {id} = req.params;
    res.json( {
        id,
        name: 'Producto 2',
        precio: 2000
    })
})
app.get('/categorias/:idCategoria/productos/:idProducto',(req,res)=>{
    const {idCategoria, idProducto} = req.params;
     res.json({
        idCategoria,
        idProducto
    })
})
