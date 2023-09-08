const score = 400
// console.log (score);
const balance = new Number(100)    // automatically define number kra hua he new object define kra hua he 
// console.log(balance);

// console.log(balance.toString().length);
//console.log(balance .toString());
// console.log(typeof balance);
// console.log(balance.toFixed(2)); // fix price in e commrece website  eg. 100.00
 const otherNumber = 23.4564
// console.log(otherNumber.toPrecision(3));  // shoe value in points

 const hundreds = 1000000
 // console.log(hundreds.toLocaleString()); // us standard
//  console.log(hundreds.toLocaleString(`en-IN`));


 // =========================== math ===========================

//  console.log(Math);
//  console.log(Math.abs(-5));
//  console.log(Math.round(4.7));
//  console.log(Math.round(4.2));
//  console.log(Math.ceil(4.1));
//  console.log(Math.floor(6.7));
//  console.log(Math.min(2, 65, 5435, 56556, 0));
//  console.log(Math.max(2, 65, 5435, 56556, 0));

console.log(Math.random());      // value in 0-1
console.log(Math.floor( Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)    