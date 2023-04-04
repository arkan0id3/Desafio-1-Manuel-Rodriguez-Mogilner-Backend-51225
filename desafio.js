class ProductManager {
    constructor(){
        this.products =[]
    }
    addProduct(product){
        if(this.products.find(producto => producto.code == product.code)){
            return "El producto ya existe"
        }else{
            this.products.push(product)

        }                    
    }
    getProducts(){
        return this.products
    }
    getProductsById(id){
        const product = this.products.find(producto => producto.id == id)
        if (product){
            return product
        }
        return "Not Found"
    }



}

class Product {
    constructor(title ="", description = "", price = O, thumbnail = "", code = "", stock = 0){
        this.title = title
        this.description = description
        this.price = price 
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = Product.incrementarID()
    }
    
    static incrementarID(){
        if(this.idIncrement){ //existe
            this.idIncrement++ 

        }else{
            this.idIncrement = 1
        }
        return this.idIncrement
    }
}


let product1 = new Product("Arroz", "Legumbre", "350", "", "x21", 20)


