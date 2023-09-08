let a = 300
if (true) {
    let a = 10
    const b = 20
    //console.log("inner: ", a);
  }
  //console.log(b);

  //==============nested scope ==================

  function one(){
    const username = "Pankaj"
        
        function two(){
                const website = "youtube"
                console.log(username);
            }
           // console.log(website);
        two()
 }

 //one()
 if (true) {
    const username = "Mr Pankaj"
        if(username === "Mr Pankaj"){
            const website = " Youtube"
            //console.log(username + website);

        }
         //console.log(website);
 }


// ++++++++++++++inter   esting++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5));
function addone(num){
    return num + 1
}


addTwo(5) 
const addTwo = function(num){                 
    return num + 2
}

