// 1. Show me how to calculate the average price of all items.
//Please `console.log` the average.


(function(){
  'use strict';

  const priceOfAllItems = items
    .map(function(item){
      return item.price;
    })
    .reduce(function(acc,i){
      return acc + i;
});




// const pricesArray = items.map(function(item) {
//   return item.price;
// })
//
// const totalPrice = pricesArray.reduce(function(a, b) {
//   return a + b
// })
//
// const avg = Math.round(totalPrice / items.length * 100) / 100
//
// console.log(`The average price is $${avg}`)

//2. Show me how to get an array of items that cost between $14.00 and
//$18.00 USD. Please `console.log` the answer.

console.log(`Items that cost between $14.00 and $18.00 USD`)
items
.filter(function(item){
  return item.currency_code === 'USD' && item.price >= 14.00 && item.price <= 18.00;
})
.map(function(item){
  return item.title;
})
.forEach(function(item){
  console.log(item);
});

// 3. Show me how to find the item with a "GBP" currency code
//  and print its name and price. Please `console.log` the
//   one you find.

items
  .filter(function(item){
    return item.currency_code === 'GBP';
  })
  .forEach(function(item){
    // \u00a3
    console.log(`${item.title} costs $${item.price}`);
  })

// 4. Show me how to find which items are made of wood.
// Please `console.log` the ones you find.

items
.filter(function(item){
  return item.materials.includes('wood');
})
.forEach(function(item){
  console.log(`${item.title} is made of wood`)
})

// 5. Show me how to find which items are made of eight or more materials.
// Please `console.log` the ones you find.

items
.filter(function(item){
  return item.materials.length >= 8;
})
.forEach(function(item){
  console.log(`${item.title} has ${item.materials.length} materials`);
  item.materials.forEach(function(material){
    console.log(material)
  })
})

// 6. Show me how to calculate how many items were made by their sellers.
// Please `console.log` your answer.

const itemsMadeBySeller = items
.filter(function(item){
  return item.who_made === 'i_did'
})
console.log(`${itemsMadeBySeller.length} were made by their sellers`)


})()
