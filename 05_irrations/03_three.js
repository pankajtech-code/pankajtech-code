// foor of loop in array ==========================

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
//    console.log(num);
}

//======string============================
const greetings = "Hello world" 
for (const greet of greetings) {
    //console.log(`each char is  ${greet}`);
}

//==============maps=====================(take only unique)====
const map = new Map()
map.set(`In`, "India")
map.set(`USA`, "unite state of america")
map.set(`FR`, "france")
map.set(`USSR`, "Russia")
//console.log(map);

//for (const key of map) {
for (const [key, value] of map) {   // ==if you want to print seprate key and there values== 
  //console.log(key, `:-`, value);
}


//======using object in for of loop=================

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman',
    
}

// for (const [key, value] of myObject) {       //===not working
//     console.log(key, `:`, value);            //===please see nest page : four.js
// }






