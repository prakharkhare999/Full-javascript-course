//primitive 

//7 types:string,number,coolearn,null,undefined,symbol,,bigInt

// const score=100
// const scoreValue=100.3
// const isLoggedIn=false
// const outsideTemp=null
// let useEmail//undefinend


// //symbol//
// const id=Symbol('123')
// const anotherId=Symbol('123')

// console.log(id===anotherId)



// //bigint->define n to the end of the number
// const bigNumber=7463837392924973849n






//reference type/non primitive

//array,objects,functuions,

//array
// const heros=["hanuman","ram","krishna"]


// // object
// let obj={
//     name:"hitesh",
//     age:22,
// }

// //function
// const myfunc=function(){
//     console.log("hello")
// }


//allreadyknow
//typeof()

//note ->null ka typeof object aata hai

//some notes
// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object




//-----------------------------------------//
//stack(primitive)//heap(non-primitive)


//in stack create copy
let myYoutubename="prakhar"
let anothername=myYoutubename
anothername="new channnal"

console.log(myYoutubename)
console.log(anothername)

//in heap changes in original
let userone={
    email:"hello@gmial.com",
    upi:"zhsbsbsw"
}
let usertwo=userone


usertwo.email="prakhaaiba"
console.log(userone)
console.log(usertwo)
