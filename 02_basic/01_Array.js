// //array
//note ->slice and spice imp mark

 const myarr=[1,2,3,4,5]


// //access
// console.log(myarr[0]);


// //delare new type

// const myarr2=new Array(1,2,3,4,);

// //methods

// myarr.push(6)
// myarr.push(7)
// console.log(myarr)

// myarr.pop()
// console.log(myarr)


// myarr.unshift(9)//insert at start
// console.log(myarr)

// myarr.shift()
// console.log(myarr)//remove at start


// console.log(myarr.includes(4))//check


// const newarr=myarr.join()//convert into string
// console.log(newarr);
// console.log(typeof(newarr))



//slice,spice

console.log("A",myarr)

const a1=myarr.slice(1,2);
console.log(a1)

console.log("B",myarr)
const a2=myarr.splice(1,3)//manuplate the array and extract the portion of the original array
console.log("C",myarr)
console.log(a2)