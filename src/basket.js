class Basket {

    basketItems = [];

    add = item => {
        this.basketItems.push(item);
    };
    remove = item => {
        this.basketItems.pop(item);
    };


}

module.exports = Basket;