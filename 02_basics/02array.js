//const marvel_heros = ["thor", "tony", "spiderman"]
//const dc_heros = ["flash", "superman", "batman"]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros);
//  console.log(marvel_heros[3][2]); // bad method

//2nd best method====================================================================
// const allHeros = marvel_heros.concat(dc_heros)
 //console.log(allHeros);

 
//third method=========================================================================
//const all_new_heros = [...marvel_heros, ...dc_heros] // good method
// console.log(all_new_heros);


//=================================== 4th method  how to merger all array into one array

// const another_array = [1, 2, 3, 4, [5, 6, 7], [8, 9, 10, [11, 12, 13]]]

// const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

 console.log(Array.isArray("pankaj")) //checking array is here or not  
 console.log(Array.from("pankaj"))
//  console.log(Array.from({name: "pankaj"}))   //  keys ka array ka bnau ya values ka array bnau

//========================================================================================
 let score1 = 100
 let score2 = 200
 let score3 = 300
console.log(Array.of(score1, score2, score3)); // .of => return array from elements 

//=========================================================================================
//=======testing===========================================================================
constheros = ["thor", "tony", "spiderman"]
 console.log(marvel_heros.join('-'));



