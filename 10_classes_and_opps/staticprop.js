class user{
    constructor(username){
        this.username=username
    }
    login(){
        console.log(`usernam : ${this.username}`)
    }
    //static access nhi deta hai 
    static createid(){
        return `123`
    }
}
const hitesh=new user("hitesh")
//nhi kr payebge access
// console.log(hitesh.createid())

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email

    }
}
const iphone=new teacher("iphone","i@phone.com")
iphone.login()