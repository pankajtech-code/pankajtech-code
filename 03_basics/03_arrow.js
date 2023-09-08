// =========== browser ke ander global object kya he ==> Window======
const user = {
    username : "Pankaj",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
//console.log(this);         // (this)   => refer empty object


//====================================================

// function chai(){        
//     let username = "Pankaj"
//     console.log(this.username);    // this=> used only objects 
// }
// chai()


//==========================================================
// const chai = function () {        
//     let username = "Pankaj"
//     console.log(this.username);    // this=> used only objects 
// }
// chai()

// =================arrow function================================

// const chai =  () => {        
//     let username = "Pankaj"
//     console.log(this.username);    // this=> used only objects 
//     //console.log(this);    
// }
// chai()


//======================================================

// const addTwo =  (num1, num2) => {    // 1st method
//     return num1 + num2            // if you use {} than compulsary use return
// }
// console.log(addTwo (3, 4) )


//const addTwo = (num1, num2) => num1 + num2  // 2nd method
//console.log(addTwo (3, 4) )

//const addTwo = (num1, num2) => ( num1 + num2)  // 3rd method if you want to use () than not compulsary to use return 
// console.log(addTwo (3, 4) )                     // implicit return

//==========return object in arroe function============

const addTwo = (num1, num2) => ({username : "Pankaj Rajput"})
console.log(addTwo (3, 4) )





