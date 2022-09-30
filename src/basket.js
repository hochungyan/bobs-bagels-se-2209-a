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
        //When I try to remove an item from my basket, if it existed in the basket then the method will run and remove that item.
        // [].includes(value); 
        //Include will return true, if the given value found at least once in the array... In this case, value would be either item1 or item2 
        if(this.basketItems.includes(item))
        {
        this.basketItems.pop(item);
        }
        else
        {   //Otherwise it will return 'Sorry, item not in basket'
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