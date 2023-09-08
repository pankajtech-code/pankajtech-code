// ++++++++++++++++for In loop in Objects==================

const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb :  'ruby',
    swift : 'Swift'
}
for (const key in myObject) {
    //console.log(myObject[key]);
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in loop use for array====================

const programming= ["js", "rb", "cpp", "Php", "java", "wordpress"]
for (const key in programming) {
    //console.log(programming[key]);
} 



//======using for in loop in map===============

//============ map are not ittratiable I.e. not possible====================
// const map = new Map()
// map.set(`In`, "India")
// map.set(`USA`, "unite state of america")
// map.set(`FR`, "france")
// map.set(`USSR`, "Russia")
// for (const key in map) {
//    console.log(key);
// }
//=====output not