const { assertEquals } = require("../test/testing-framework");
const Basket = require("../src/basket");

let expected;
let actual;
let result;
let basket;
let item;

// Test 1 - is anything added to the basket?

console.log(============================);
console.log(Test 1 - add puts something into the basket);


// Arrange
basket = new Basket();
item = { id: item1 };
expected = 1;


// Act
basket.add(item);
actual = basket.basketItems.length;


// Assert
result = assertEquals(actual, expected);
console.log(Test 1: Something added to basket: ${result});


// Clean up
basket = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;
