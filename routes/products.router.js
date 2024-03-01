const express = require('express');
const {faker} = require('@faker-js/faker');
// const app = express();
const router = express.Router();
// app.get('/productos', (req,res)=>{
router.get('/', (req,res)=>{
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
// app.get('/productos/filtro', (req,res)=>{
router.get('/filtro', (req,res)=>{
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
// app.get('/productos/:id', (req,res)=>{
router.get('/:id', (req,res)=>{
    const {id} = req.params;
    res.json( {
        id,
        name: 'Producto 2',
        precio: 2000
    })
})
module.exports = router; 