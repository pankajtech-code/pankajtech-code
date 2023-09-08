//==========================object litrel======================================================





// hoe to define symbol in object
// => create symbol and define in act like key in object
const mySym = Symbol("key1")

const jsUser = {
    name : "pankaj",
    age : 26,
    [mySym] : "mykey1",
    email : "rajputpankajtech@gmail.com",
    address : "Amarpur",
    isLoggedIn : false,
    lastLoggedinDays : ["Monday", "Tuesday"]
    
}
// how to access value
// => 1) .[dot]
// => 2) [""]
console.log(jsUser.email);     // 1st method to print
console.log(jsUser["email"]);  // 2nd (best) method to print
console.log(jsUser["address"]);


console.log(jsUser[mySym]);

// how to change value  
// jsUser.email = "pankaj@google.com"
// Object.freeze(jsUser)       // freeze => cant  be modified keys
// console.log(jsUser);


//[  ==>jsUser.email = "pankaj@microsoft.com"
//console.log(jsUser.email) <==   ]


jsUser.greeting = function(){
    console.log("Hello my users");
}

console.log(jsUser.greeting()); // => output : Hello my users
//console.log(jsUser.greeting);  //=> output : [Function (anonymous)] => function exicute nhi hue he sirf refrence aya he 


jsUser.greetingTwo = function(){
    console.log(`Hello my users ${this.name}` );  // using  ${this.name} add name with help of  objects values
}
console.log(jsUser.greetingTwo ()); 