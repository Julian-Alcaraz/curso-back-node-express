const express = require('express');
const ProductsService=require("./../services/product.service");
const { ne } = require('@faker-js/faker');
const router = express.Router();
const service = new ProductsService();

router.get('/', (req,res)=>{
    const productos = service.find();
    res.json(productos)
})
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
   const product =service.findOne(id)
   res.json(product)
})
// crear
router.post('/',(req,res)=>{
    const body = req.body;
    const newProduct = service.create(body);
    if(newProduct){
        res.status(201).json({
            message: 'created',
            product: newProduct 
        })
    }    
})
// editar estricto todos los campos 
router.put('/:id',(req,res)=>{
    const {id} = req.params;
    const body = req.body;
    res.json({
        message: 'edited',
        data: body,
        id
    })
})
// editar parcial
router.patch('/:id',(req,res)=>{
    const {id} = req.params;
    const body = req.body;
    const product = service.update(id,body)
    res.json(product)
})
router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    const body = req.body;
    const product = service.delete(id)
    res.json(product)
})

module.exports = router; 