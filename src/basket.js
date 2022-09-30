class Basket {
    capacity; 
    basketItems;

    constructor() {
        this.capacity = 2;
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
        if(this.basketItems.includes(item))
        {
        this.basketItems.pop(item);
        }
        else
        {
            return 'Sorry, item not in basket';
        }
    };
    
    isFull() {
        return this.basketItems.length >= this.capacity;
    };

    setCapacity(newCapacity) {
        this.capacity = newCapacity;
    
    }


}

module.exports = Basket;