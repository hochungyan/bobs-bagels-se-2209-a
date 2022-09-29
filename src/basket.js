class Basket {

    constructor(capacity) {
        this.capacity = capacity;
        this.basketItems = [];
    }

    add = item => {
        if (this.isFull())
        {
            return "Sorry, this basket is full";
        }
        else {
        this.basketItems.push(item);
        return this.basketitems;
        }
    };


    remove = item => {
        this.basketItems.pop(item);
    };
    
    isFull() {
        return this.basketItems.length >= this.capacity;
      }

}

module.exports = Basket;