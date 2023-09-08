const coding = ["js", "ruby", "java", "python", "cpp"]
//+++++++++1st method+++++++++++++++++++++++++++
// coding.forEach( function (val) {     // Callback    eg-> coading.foreach( function name () {} ) => coading.foreach( function (val) {})
//      console.log(val);
// } )


//+++++++++++++++++++++++++++ second method +++++++++++++++++++++++++++++++++++++

// ==================in the help of arrow function==================================
// coding.forEach ( (item) => {
//     console.log(item);
// } )


//+++++++++++++++++++++ 3rd method // pass function in forEach loop+++++++++++++++++++++++++++

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe) 



//========================4th method=========
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

//++++++++++++++using array => Object in forEach++++++++++++++
const myCoading = [
    {
        languageName: "javascripty",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoading.forEach( (item) => {
    console.log(item.languageName);
} )