//singleton
//const tinderUser =new Object()

//non singleton obj
const tinderuser={}
tinderuser.id="1234"
tinderuser.name="sammy"
tinderuser.isloggedin=false;


// console.log(tinderuser)


// const regularuser={
//     email:"some@gmail",
//     fullname:{
//         userfulname:{
//             firstname:"hitesh",
//             lastname:"khare"
//         }

//     }
// }
// // console.log(regularuser.fullname.userfulname.firstname);



// const obj1={
//     1:"a",
//     2:"b"



// }
// const obj2={
//     3:"c",
//     4:"d"
// }



// //not for merge
// // const obj3={obj1,obj2}
// //like array =[1,2,[3,4]]


// //for merge
// // const obj3=Object.assign({},obj1,obj2)


// //for merge->spred->latest and best
// // const obj3={...obj1,...obj2}
// // console.log(obj3)


// //some operations
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))

// //cheack property is exist or not->give true and false
// console.log(tinderuser.hasOwnProperty('name'))


//destruture
const course={
    coursename:"javascript",
    price:"999",
    courseteacher:"hitesh"
}

//normal access
//course.courseteacher


//destrute 1
const {courseteacher}=course
console.log(courseteacher)

//destruture 2
const{courseteacher:teacher}=course
console.log(teacher)


//struture of API
//json

// {
// "name":"prakhar",
// "coursename":"js in hindi",
// "price":"free"





// }
