class Cart {
    constructor(){
        this.content = []
    }
    getItems(){
        return this.content
    }
}

const cart = new Cart()

module.exports = {Cart}