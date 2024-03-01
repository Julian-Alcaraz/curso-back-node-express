const express = require('express');
const routerApi = require('./routes');
// const {faker} = require('@faker-js/faker');
const app = express();
const port = 3000;
routerApi(app)

app.listen(port,()=>{
    console.log('mi puerto'+port)
})
app.get('/', (req,res)=>{
    res.send('Hola mi server en express')
})
// pasar a sus propios routers
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
app.get('/categorias/:idCategoria/productos/:idProducto',(req,res)=>{
    const {idCategoria, idProducto} = req.params;
     res.json({
        idCategoria,
        idProducto
    })
})
