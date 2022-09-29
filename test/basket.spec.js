const { assertEquals } = require('./testing-framework');
const Basket = require("../src/basket");

let expected;
let actual;
let result;
let basket;
let item;

// Test 1 - is anything added to the basket?

console.log(`============================`);
console.log(`Test 1 - add puts something into the basket`);

// Arrange
basket = new Basket();
item = { id: `item1` };
expected = 1;

// Act
basket.add(item);
actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 1: Something added to basket: ${result}`);
console.log(`Test 1: Number of Item in the basket: ${actual}`);
console.log(`============================`);
console.log(`Test 2: Remove Item from the basket`)
basket.remove(item);
expected = 0
actual = basket.basketItems.length;
console.log(`Test 2: Number of Item in the basket: ${actual}`);
result = assertEquals(actual, expected);
console.log(`Test 2: Does the basket contains ${expected} item: ${result}`);
console.log(`============================`);