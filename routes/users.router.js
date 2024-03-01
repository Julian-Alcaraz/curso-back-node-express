const express = require('express');
// const app = express();
const router = express.Router();

// app.get('/users', (req,res)=>{
router.get('/', (req,res)=>{
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
module.exports = router; 
