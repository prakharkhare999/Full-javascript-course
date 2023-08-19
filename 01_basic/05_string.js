const name="prakhar"
const repocount=50


//bad pratice
console.log(name+repocount+"value")


//new method
console.log(`hello my name is ${name} and my repo count is ${repocount}`)

//new way delare the string
const gameName =new String("hello")

//access the string
 console.log(gameName[0])
 console.log(gameName.__proto__);
 console.log(gameName.length)
 console.log(gameName.toUpperCase())
 console.log(gameName.charAt(2))
 console.log(gameName.indexOf('l'))
 
console.log(gameName.substring(0,4))
console.log(gameName.slice(1,4))

console.log(gameName.trim())//->remove transh spaces
console.log(gameName.replace('l','u'))//l lo u se replace

console.log(gameName.includes('hello'))//check krne ke liye

//split
console.log(gameName.split('_'))

