const mynums=[1,2,3]


//syntax->
// const mytotal=mynums.reduce(function(acc,currval){
//     return acc+currval
// },0)



//by arrow function
// const mytotal=munums.reduce((acc,curr)=>acc+curr,0)
// console.log(mytotal)



const shoppingcart=[
    {
        item:"js course",
        price:999
    },
    {
        item:"data scirnce",
        price:129999
    }
]

const pricetopay=shoppingcart.reduce((acc,item)=>acc+item.price,0)
 
console.log(pricetopay)