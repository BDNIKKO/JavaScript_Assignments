// WRITE YOUR CODE HERE
let bill = 100

function calculateTip(amount){
    return amount * 0.20;
}
function getBillTotal(amount){
    let tip = calculateTip(amount);
    return amount + tip;
}

console.log(`The calculated tip on a bill of $${bill} is $${calculateTip(bill)}.`);
console.log(`The total bill including tip for a bill of $${bill} is $${getBillTotal(bill)}.`);


// DO NOT EDIT BELOW THIS LINE
module.exports = { bill, calculateTip, getBillTotal };
