//object literal and this

const user={
    username:"hitesh",
    logincount:8,
    signedin:true,


    getuserdetails:function(){
        console.log(`username:${this.username}`)
console.log(this)
    }
}
// console.log(user.username)
// console.log(user.getuserdetails())



//new keyword->new instance
function User(username,logincount,isloggedin){
    this.username=username
    this.logincount=logincount
    this.isloggedin=isloggedin
//return this
}
const userone=new User("hitesh",12,true)
const usertwo=new User("chaiaurcode",12,true)
const userthree=new User("prakhar",11,false)
console.log(userone)
console.log(usertwo)
console.log(userthree)






