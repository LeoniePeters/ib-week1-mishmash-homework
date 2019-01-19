class Cart {
    constructor(){
        this.content = []
    }
    getItems(){
        return this.content
    }
    addItem(itemName, quantity, price) {
        this.content.push({name: itemName, quantity, pricePerUnit: price})
    }
}

const cart = new Cart()

module.exports = Cart
