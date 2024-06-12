// WRITE YOUR CODE HERE// WRITE YOUR CODE HERE

const fruitInventory = new Map([
    ['apple', 10],
    ['banana', 20],
    ['orange', 30]
]);
    
fruitInventory.set('apple', 15);

const bananaInventory = fruitInventory.get('banana');

const uniqueColors = new Set(['red', 'blue', 'green']);

uniqueColors.add('yellow');

const hasBlue = uniqueColors.has('blue');

// DO NOT EDIT BELOW THIS LINE
module.exports = { fruitInventory, bananaInventory, uniqueColors, hasBlue };

