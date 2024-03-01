const productsRouter = require('./products.router')
const usersRouter = require('./users.router')
const express = required('express');
function routerApi(app){
    // creamos un roter, para versiones de la api, cambiando solo la linea app.use, cambiarias todas lasrutas automaticamente
    const router = express.Router()
    app.use('/api/v1', router);

    router.use('/products', productsRouter);
    router.use('/users', usersRouter );
    // otras rutas, generar archivos
}
module.exports = routerApi;