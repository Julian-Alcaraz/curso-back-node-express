const express = require('express');
const ProductsService=require("./../services/product.service");
const { ne } = require('@faker-js/faker');
const router = express.Router();
const service = new ProductsService();

router.get('/', async(req,res)=>{
    const productos = await service.find();
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
router.get('/:id',async (req,res)=>{
    const {id} = req.params;
   const product = await service.findOne(id)
   res.json(product)
})
// crear
router.post('/', async (req,res)=>{
    const body = req.body;
    const newProduct = await service.create(body);
    if(newProduct){
        res.status(201).json({
            message: 'created',
            product: newProduct 
        })
    }    
})
// editar estricto todos los campos 
router.put('/:id',async (req,res)=>{
    const {id} = req.params;
    const body = req.body;
    const product = await service.update(id,body)
    res.json(product)
})
// editar parcial
router.patch('/:id', async (req,res,next)=>{
    try{
        const {id} = req.params;
        const body = req.body;
        const product = await service.update(id,body)
        res.json(product)
    }catch(error){
        // envio los errores por submithandler el middlewares
        next(error)
        // res.status(404).json({message:error.message})
    }
})
router.delete('/:id',async (req,res,next)=>{
    const {id} = req.params;
    const body = req.body;
    const product = await  service.delete(id)
    res.json(product)
})

module.exports = router; 