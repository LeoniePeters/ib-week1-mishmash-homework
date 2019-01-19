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

    clear(){
        this.content = []
    }

    total(){
        if(this.content.length === 0) {
            return 0
        }
        return this.content.map(product => product.quantity * product.pricePerUnit).reduce((acc,val) => acc + val)
    }
}

const cart = new Cart()

module.exports = Cart
