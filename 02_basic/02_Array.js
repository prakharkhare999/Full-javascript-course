const marvelhero=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

//push in array

// marvel_heros.push(dc_heros)
// console.log(marvelhero)

//not merge but look like [1,12,3,[3,4,5]]



//concat

//so we use concat->merge  but it return the new array
// const arr1=marvelhero.concat(dc)
// console.log(arr1)


//spred->spred kr diya sb elements ko
// const allnewhero=[...marvelhero,...dc]
// console.log(allnewhero)




//flat->depth of array ,sort trickk write infinity ans it simplify the array

// const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const realanotherarray=anotherarray.flat(Infinity)
// console.log(realanotherarray)



//isArray->check array or not
console.log(Array.isArray("prakhar"))


//from ->for conversion of the array
console.log(Array.from("prakhar"))


//special case->interview and intersting
console.log(Array.from({name:"hitesh"}))
// give empty array->we must give key or val not both




//of
//variables to array

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3))

