const { assertEquals } = require('./testing-framework');
const Basket = require("../src/basket");

let expected;
let actual;
let result;
let basket;
let item1;

// Test 1 - is anything added to the basket?

console.log(`============================`);
console.log(`Test 1 - add puts something into the basket`);

// Arrange
basket = new Basket(); //Setup New Basket
item1 = { id: `item1` }; //Setup Inital item
expected = 1; //Expected value

// Act
basket.add(item1); //Add 1 item
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

// Test 2 - is something removed from the basket?
console.log(`============================`);
console.log(`Test 2: Remove Item from the basket`)

// Arrange
basket = new Basket();
let item2 ={id:`item2`};
basket.add(item1);
basket.add(item2);
expected = 1
actual = basket.basketItems.length;
console.log(`Test 2: Number of Item in the basket Before: ${actual}`);

//Act
basket.remove(item1);
actual = basket.basketItems.length;
console.log(`Test 2: Number of Item in the basket After: ${actual}`);

//Assert
result = assertEquals(actual, expected);
console.log(`Test 2: Does the basket contains ${expected} item: ${result}`);

// Clean up
basket = null;
item = undefined;
item1 = undefined;
item2 = undefined;
expected = undefined;
actual = undefined;
result = undefined;

//Test 3 Check when the basket is full or not
console.log(`============================`);
console.log(`Test 3: Check Bag Capacity`)

//Arrange
basket = new Basket(2);
item1 = { id: `item1` };
item2 ={id:`item2`};
let item3 = {id:`item3`};
expected = "Sorry, this basket is full";
basket.add(item1);
basket.add(item2);
actual =basket.add(item3);
result = assertEquals(actual,expected);
console.log(`${expected}: ${result} `);
// Clean up
basket = null;
item = undefined;
item1 = undefined;
item2 = undefined;
expected = undefined;
actual = undefined;
result = undefined;


//Test 3 Check when the basket is full or not (Another Way to do Test 3)
//console.log(`============================`);
//console.log(`Test 3: Check Bag Capacity`)

//Arrange
//basket= ['item1','item2','item3'];
//basket.basketItems= ['item1','item2','item3'];
//Expected = 3;
//Actual =basket.length;
//Result = assertEquals(actual,expected);
//console.log(`Is the Bag Full: ${result}`);


//Test 4 Create a larger basket when needed
//console.log(`============================`);
//console.log(`Test 4: Create a Larger Basket`)

//Arrange
basket = new Basket[];
actual = basket.basketItems.length;


//Act

//Assert
console.log(`Do we need a larger basket: ${result}`)
//Expected