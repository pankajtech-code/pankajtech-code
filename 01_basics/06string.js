const name = "pankaj"
const repoCount = 10
//console.log(`Hello java script my name is ${name} and my repo count is ${repoCount}`); // good method to declare string


// console.log(name + repoCount + " Value"); this is not good method

const gameName = new String('igipankaj-m')

console.log(gameName[1]);  // define game name character position
console.log(gameName);
//================ptototype method======================
//========method/function================================
console.log(gameName.__proto__);
console.log(gameName.anchor());

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('j'));  // showing character in which position

 const newString = gameName.substring(0,5)   // shoe name 0-5, for eg. -igipa
 console.log(newString);

 const anotherString = gameName.slice(-11,5)
 console.log(anotherString);

const newStringg = "           pankaj       "   // remove unwanted spaces in string
console.log (newStringg);
console.log (newStringg.trim());

 