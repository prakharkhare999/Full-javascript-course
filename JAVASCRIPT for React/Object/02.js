const person={
    name:"xyz",
    age:10,
    isMarried:false
};


// i want to copy this object and do not want to change the name of the firstg person.

// use spread operator(...)
// change the name
const person2={...person,name:"jack"}

//important point we can do the same thing in arrays to.