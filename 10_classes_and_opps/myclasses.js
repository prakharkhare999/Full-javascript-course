//ES 6 ke bad

class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptpassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }



}
const chai=new User("chai","chai@dfff","2222")
console.log(chai.encryptpassword())
console.log(chai.changeusername());



//behind the scene
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());