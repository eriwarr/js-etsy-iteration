// 1. Show me how to calculate the average price of all items.
//Please `console.log` the average.

const pricesArray = items.map(function(item) {
  return item.price;
})

const totalPrice = pricesArray.reduce(function(a, b) {
  return a + b
})

const avg = Math.round(totalPrice / items.length * 100) / 100

console.log(`The average price is ${avg}`)

//2. Show me how to get an array of items that cost between $14.00 and
//$18.00 USD. Please `console.log` the answer.
