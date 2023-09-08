//========================================object litrel============================================
 //const tinderUser = new Object()  // singelten object
 const tinderUser = {}            // no-singelton object 


 tinderUser.id = "14vfdgh"
 tinderUser.name = "punks"
 tinderUser.isLoggedIn = false


 //console.log(tinderUser);



 const regularUser = {
    email : "my@gmail.com",
    fullname : {
        userfullname : {
            firstname : "pankaj",
            lastname : "rajput" ,
        }
    }
 }

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4) //(old method to assign value)=====.assign({}(object), obj4(source))
const obj3 = {...obj1, ...obj2, ...obj4} // (new method)
//console.log(obj3);

///==========array of object==============
 const users =[
  {
    id : 1,
    email : "h@gmail,com"
 },
 {
    id : 1,
    email : "h@gmail,com"
 } ,
 {
    id : 1,
    email : "h@gmail,com"
 } ,
]
   //users[1].email


   // console.log(tinderUser);
   // console.log(Object.keys(tinderUser)); // shows objects keys
   // console.log(Object.values(tinderUser)); // shoews objwcts values
   // console.log(Object.entries(tinderUser)); // shoews objwcts enteries
   // console.log(tinderUser.hasOwnProperty('isLoggedIn')) // (checking isLogged=>property)==> value exist or not
 
 
   //============================== (How to object  destructure) ======================================= 
  
 const course = { 
   coursename : "java script course",
   price : "2002",
   courseInstructor : "rajput" 
  } 
 //course.courseInstructor     // old method

 //const {courseInstructor} = course // new method
 //console.log(courseInstructor);

  // (( if you want to print price
 //const {price} = course
 //console.log(price); ))

 // if courseInstructor are big name than you want to add name  
 const {courseInstructor: instructor} = course
 console.log(instructor);
 

 






