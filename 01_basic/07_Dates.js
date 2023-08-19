//Dates

// let myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toLocaleDateString())


// //typeof
// console.log(typeof(myDate))
// //object

// let createdate=new Date(2023,0,23)
// let createdate=new Date(2023,0,23,5,3)
// let createdate=new Date("01-14-2023")
// console.log(createdate.toLocaleString())


let mycreateddate=new Date("01-14-2023")
let mytimestamp=Date.now()
// console.log(mytimestamp)//mili second
// console.log(mycreateddate.getTime())//mili second
// console.log(Math.floor(Date.now()/1000));//convert into seconds


let newdate=new Date()
console.log(newdate);
console.log(newdate.getMonth())//month starting with 0
console.log(newdate.getDay())

//ese bhi likh skte
//`${newdate.getDay()}and the time`


//customize the time
newdate.totalLocalString('default',{
    weekday:"long",
})