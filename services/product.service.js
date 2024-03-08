const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom');
class ProductsService{
    constructor(){
        this.products = [];
        this.generate();
    }
    async generate(){
        const limit = 100 
        for (let i = 0; i < limit; i++) {
            this.products.push({
                id: faker.string.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.url(),
            })        
        }
    }
    async create(data){
        const newProduct={
            id : faker.string.uuid(),
        //    con estos 3 puntos concateno o merge de array con el id, quedaria el formato del prod
            ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }
    find(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(this.products)
            },5000)
        })
    }
    async findOne(id){
        return this.products.find(item => item.id === id);
    }
    async update(id,body){
        const index = this.products.findIndex(item => item.id === id);
        if(index === -1){
            throw boom.notFound("Producto no encontrado")
        }else{
            const product=this.products[index];
            this.products[index]= {
                ...product,
                ...body
                }
            return this.products[index];
        }

    } 
    async delete(id){
        const index = this.products.findIndex(item => item.id === id);
        if(index === -1){
            throw new Error("product not found")
        }else{
            this.products.splice(index,1); 
            return {message:true , id};
        }
    }
}
module.exports = ProductsService; 