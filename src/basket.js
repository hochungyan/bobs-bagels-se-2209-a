class Basket {

    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
    }

    add = item => {
        this.basketItems.push(item);
    };
    remove = item => {
        this.basketItems.pop(item);
    };
    isFull() {
        return this.basketItems.length >= this.capacity;
      }

}

module.exports = Basket;