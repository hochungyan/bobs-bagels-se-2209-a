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
basket = new Basket(); //Setup New Basket
item = { id: `item1` }; //Setup Inital item
expected = 1; //Expected value

// Act
basket.add(item); //Add 1 item
actual = basket.basketItems.length; //Items in the basket

// Assert
result = assertEquals(actual, expected);
console.log(`Test 1: Something added to basket: ${result}`);
console.log(`Test 1: Number of Item in the basket: ${actual}`);
//Clean up
basket = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);
console.log(`Test 2: Remove Item from the basket`)
// Arrange
basket = new Basket();
let item1 = { id: `item1` };
let item2 ={id:`item2`};
basket.add(item1);
basket.add(item2);
expected = 1
actual = basket.basketItems.length;
console.log(`Test 2: Number of Item in the basket Before: ${actual}`);
//Act
basket.remove(item);
actual = basket.basketItems.length;
console.log(`Test 2: Number of Item in the basket After: ${actual}`);
//Assert
result = assertEquals(actual, expected);
console.log(`Test 2: Does the basket contains ${expected} item: ${result}`);
console.log(`============================`);

// Clean up
basket = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;



