
//scope{}

// if(true){
//     let a=10
//     const b=20
//     var c=30
    
// }
// console.log(a)//ye bhar nhi ayega scope ke
// console.log(b)//ye bhi nhi ayega bhar
// //problem->
// console.log(c)//print ho jayega scope ke bhar




//try this for understanding of scope
// function one(){
//     const username="hitesh"
//      function two(){
//         const website="instagram"
//         console.log(username)
//      }
//      console.log(website)
//      two()
// }
// one()



//try this for understanding scope
// if(true){
//     const username="hites"
//     if(username=="hitesh"){
//         const website="yt"
//         console.log(username+website)

//     }
//     console.log(website)
// }
// console.log(username)





////==========intersting===

//hoisting

//ye ho jayega phle call krne pr bhi
addone(5)
function addone(value){
    return num+1
}


//nhi hoga  function delare dusre tarike se kia haii
addtwo(5)
const addtwo=function(num){
    return num+2
}
