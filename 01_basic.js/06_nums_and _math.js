
// const score=400
// console.log(score)

// //explicity define number
// const balance =new Number(100)
// console.log(balance)


//method
// console.log(balance.toString())
// console.log(balance.toFixed(1))//point ke bad 0 de dega

// const otherNumber=23.8966
// console.log(otherNumber.toPrecision(3))
//o/p->23.9


// const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'))//according to the indian representation of rupees

//+============MATHS==========+///

console.log(Math)
console.log(Math.abs(-4))//mod
console.log(Math.round(4.6))//leave the decimal
console.log(Math.ceil(4.2))//ceil means ceiling means top matlab 4 se thoda uper to 5
console.log(Math.floor(4.2))//floor means low
//min
//max
console.log(Math.random());//b/w 1 and 0
console.log((Math.random()*10)+1);//0 or 1


//basic formula for defines ranges
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min)
