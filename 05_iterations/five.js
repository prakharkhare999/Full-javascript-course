const coding=["js","ruby","java"]

//for each 
// coding.forEach(function (item)//it is called call back{
//     console.log(item)
// })


// //foreach with arrow
// coding.forEach((val)=>{
//     console.log(val)

// })



// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })



//object in forEach
const mycoding=[
    {
        languagename:"javascript",
        filename:"js"

    },
    {
        languagename:"java",
        filename:"java"

    },
    {
        languagename:"Cpp",
        filename:"cpp"

    }
]


mycoding.forEach(  (item)=>{
    console.log(item.languagename);


})