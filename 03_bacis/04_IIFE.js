//Immediately invoked function expresxion (IIFE)

//name iffe,because function have name
(function chai(){
    console.log(`hello`)
})();//semicolon is madatory for this because node does not know when the invoked function end

//interview q-> why we use iffe
//ans->global polution means global variables ko htane ke liye use hota hai

//syntax->

// (
//     function
// )();call imidetly


//unnamed iffe
//syntax in arrow 
// (()=>{
//     console.log(`hello2`)
// }

// )();



//syntax in parameter
((name)=>{
    console.log(`welcome ${name}`)
}

)("name");