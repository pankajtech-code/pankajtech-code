// immediately Invoked Function Expression (IIFE)

// Iife => 1) jo function jlde se execute ho jae 
//  2) global scope ke polution se problem hote he kye bar global scope ke variable ya  declaration he uske polution htane ke liyae Iife ka use kiya   

//================================================== NAmed Iife ================================================================
(function chai (){                      //1st method
    //NAmed Iife
    console.log(`DB CONNECTED ONE`)
}());


// arrow function 


// (  function orcode() {              //2nd method
//     console.log(`DB CONNECTED TWO`)
// })();



( () => {                                // 3rd method
    console.log(`DB CONNECTED TWO.0`)
})();

//================================================= Unamed Iife======================================================================


( (name) => {                                              // parameter pass
    //Unamed Iife
    console.log(`DB CONNECTED TWO ${name}`)
})(`HARI OM`);                                      // perameter pass