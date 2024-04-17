//object -> key value pairs

var obj={
    name:"hello",
    age:23

}


//access 
console.log(obj.name)
//access 2
console.log(obj['name'])

// we can also change the val of the object like this
console.log(obj.name="prakhar")


//but we can freze the obj so it is not changeble
// Object.freeze(obj);
 



//some intresting
//we can also calculate the function length
function p(){

}
console.log(p.length);
//o/p-> 0


function p1(a,b,c){

}
console.log(p1.length);
//o/p->3