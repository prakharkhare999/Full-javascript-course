const person={
    name:"xyz",
    age:10,
    isMarried:false
};

//make variables of the property of object without destrucring
/*
const name=person.name
const age =person.age
const isMaried=person.isMarried
*/

//make variable of property of object  with destrucring
const {name,age,isMarried} =person;

// we made three variable name,age,ismarried

console.log(name);