const myArr = [0, 1, 2, 3, 4, 5]
//const myHeros = ["shaktiman", "nagraaj", "tobbo"]


//const myArr2 = new Array(1, 2, 3)
//console.log(myArr[3]); 


/// Array Methods

// myArr.push(6)       // push => adding value in array
//myArr.push(44)
//myArr.pop()        // pop => remove last value in array
//myArr.shift()        // shift => removed zero 
// console.log(myArr.includes(5)); // includes => checking value here or not (comparison)
// console.log(myArr.indexOf(5)); // indexof => checking value output will be in booliean



//  const newArr = myArr.join()   // join => type changed in string
//console.log(myArr); 
// console.log(newArr);
 

//============================ slice or splice================ 

console.log("A ", myArr);
const myn1 = myArr.slice(1, 5)
console.log(myn1);


console.log("B", myArr);
const myn2 = myArr.splice(1, 5)      // splice array me se value nikal deta he 
console.log(myn2);


console.log("c", myArr);
console.log(myn2);



