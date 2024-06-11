let shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

shoppingList.push('fruit loops');

shoppingList[4] = `fair trade coffee`
shoppingList[2] = 'rice'
shoppingList[3] = 'beans'

let shoppingCart = [];

let lastItem = shoppingList.pop();
shoppingCart.push(lastItem);

let firstItem = shoppingList.shift();
shoppingCart.push(firstItem);

while (shoppingList.length > 0) {
    let item = shoppingList.shift();
    shoppingCart.push(item);
  }
  
shoppingCart.sort();

shoppingCart.reverse();

console.log(shoppingCart.join(', '));

