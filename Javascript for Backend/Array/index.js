//array

arr=[1,2,3,4]


//foreach -> iterate in arr
arr.forEach(function(val){
    console.log(val)
})




//map -> create new array and work /iterate on it.no change in the orignal array
arr.map((val)=>{
console.log(val*2);
})

//normal
/*

arr.map(function(val) {
    console.log(val*2);
    })

 */



// map also return 
var ans = arr.map(function(val){
    return 13;
})
console.log(ans);
//o/p ->  [13,13,13,13]





newarr=[4,5,6,7,1,2]
//filter -> its also give new array like map not change in the orignal array
var ans2=newarr.filter(function(val){
    if(val>3){return true}
    else return false;

})
console.log(ans2)






//find -> like forEach but it find the first value

var newarr2=[2,3,2,2]
var ans3=arr.find(function(val){
    if(val===2){return val}
})
console.log(ans3)





//index of-> find the index ->it return -1 when element is not present
var newarr3=[2,3,4,5]
console.log(arr.indexOf(4))