```

# Part 1

As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

```

| Object | Properties             | Message    | Output |
| ------ | ---------------------- | ---------- | ------ |
| Basket | ItemsList@array[@item] | Add(@item) | @void  |

```

As a member of the public,
So that I can change my order
I'd like to remove an item from my basket

```

| Object | Properties             | Message       | Output |
| ------ | ---------------------- | ------------- | ------ |
| Basket | ItemsList@array[@item] | Remove(@item) | @void  |

```

# Part 2

As a member of the public,
So that I can not overfill my small bagel basket
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.

```

| Object | Properties                            | Message             | Output   |
| ------ | ------------------------------------- | ------------------- | -------- |
| Basket | BasketCapcity@int - constant or final | CheckIfBasketFull() | @boolean |

```

As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to.

```

| Object | Properties        | Message                      | Output |
| ------ | ----------------- | ---------------------------- | ------ |
| Basket | BasketCapcity@int | IncreaseBasketCapacity(@int) | @void  |

```

As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket. In the same way, I want to know if I try to add an item with the same ID already in my basket.

```

| Object | Properties            | Message                               | Output |
| ------ | --------------------- | ------------------------------------- | ------ |
| Basket | ItemList@array[@item] | IsItemExist() IsItemDuplicated(@item) | @void  |
| item   | Item_id@string        |                                       |        |

```

# Part 3

As a member of the public,
So that I can know how much my bagels are,
I’d like to see the price of each item before I add it to my basket.

```

| Object | Properties                   | Message                | Output       |
| ------ | ---------------------------- | ---------------------- | ------------ |
| Basket | ItemList@array[@item]        | Add(@item)             | @void        |
| item   | Item_id@string ItemPrice@int | getid() getItemPrice() | @string @int |

```

As a member of the public,
So that I can prepare to pay
When I go to checkout I'd like to know the total sum of the bagels in my basket

```

| Object | Properties                   | Message                | Output       |
| ------ | ---------------------------- | ---------------------- | ------------ |
| Basket | ItemList@array[@item]        | totalPrice()           | @int         |
| item   | Item_id@string ItemPrice@int | getid() getItemPrice() | @string @int |

```

```
