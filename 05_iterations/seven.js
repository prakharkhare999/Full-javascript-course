const mynum=[1,2,3,4,5,6]



//map bhi return krta hai

// const mynwnum= mynum.map((num)=>num+10)




//chaning->multiple method ko lgana
const newnums=mynum
.map((num)=>num*10)
.map((num)=>num+10)
.filter((num)=>num>=40)



console.log(newnums);

