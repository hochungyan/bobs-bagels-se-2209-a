const { assertEquals } = require('./testing-framework');
const Basket = require("../src/basket");
const Item = require("../src/item");

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


// Test 4 Create a larger basket when needed
console.log(`============================`);
console.log(`Test 4: Create a Larger Basket`)

//Arrange
basket = new Basket();
expected = 3;

//Act
basket.setCapacity(3);
actual = basket.capacity;

//Assert
result = assertEquals(expected, actual);
console.log(`Do we need a larger basket: ${result}`)


//Expected

//CleanUp
// Clean up
basket = null;
item1 = undefined;
item2 = undefined;
expected = undefined;
actual = undefined;
result = undefined;

//Test 5a: remove an item that doesn't exist in my basket and want to know if I try to add an item with the same ID already in my basket.
//Setup or Arrange
console.log(`============================`);
console.log(`Test 5A: Remove an item that does not exist in my basket`)
basket = new Basket();
item1 = { id: `item1` };
item2 ={id:`item2`};
expected = 'Sorry, item not in basket';
//Act
basket.add(item1);
actual = basket.remove(item2);
result =assertEquals(actual, expected);
console.log(`Are you removing an item that does not exist in the basket: ${result}`);

//Cleanup
basket = null;
item1 = undefined;
item2 = undefined;
expected = undefined;
actual = undefined;
result = undefined;






//Test 6: I'd like to see the price of an item before I add it to my basket
// Arrange 
console.log(`============================`);
console.log(`Test 6: See the price of an item before adding it to basket`);

let item4 = new Item('1', 3);

result = assertEquals(item4.id, '1');
result2 = assertEquals(item4.price, 3);
console.log(result);
console.log(result2);
console.log(item4);

//Cleanup
item1 = undefined;
expected = undefined;
actual = undefined;
result = undefined;
result2 = undefined;



