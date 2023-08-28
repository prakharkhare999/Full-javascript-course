function setusername(username){
    this.username=username
}
function createUser(username,email,password){
    setusername.call(this,username)
    this.email=email
    this.password=password
}
const chai=new createUser("chai","@chai","123")
console.log(chai)