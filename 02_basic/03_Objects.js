

//objects literals

// symbol
const mysym=Symbol("key1")

const jsuser={
    name:"Hitesh",
    age:18,
    [mysym]:"maysym1",
    location:"jaipur",
    email:"prkadjoasnfj@",
    islogin:false,
    lastloginday:["monday","sunday"]

}


//access method 1
console.log(jsuser.email)

//access mehod 2 squre notation
console.log(jsuser["email"])
//because we make a key string tyoe so dot notation doesnot access the string so we use this


//how to access symbol into object
console.log(jsuser[mysym])


//change
jsuser.email="prakhar@"
console.log(jsuser.email)



//freze the object->after freze you can not change the val of obj
// Object.freeze(jsuser)
// jsuser.email="goku@"
// console.log(jsuser.email)
//not change


//function in obj
jsuser.greeting=function(){
console.log("hello function ")

}

jsuser.greetingtwo=function(){
    console.log(`hello js user,${this.name}`)

}

console.log(jsuser.greeting);//use the brackts with the function(),agar nhi kroge to sirf function ka reference dega na ki function execute hoga
console.log(jsuser.greetingtwo());//like this