<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>chai aur</h1>
    <button id="start">start</button>
    <button id="stop">stop</button>
</body>

<script>
//normal way
//setInterval(function(){
// console.log("hitesh",Date.now())
// },2000)

//by reference
// const saydate=function(str){
//     console.log(str,Date.now());
// }
// setInterval(saydate,1000,"hello")

// const saydate=function(str){
//     console.log(str,Date.now());
// }
// const intervalid=setInterval(saydate,1000,"hello")
//clearInterval(intervalid)


const saydate=function(str){
    console.log(str,Date.now());
}


const intervalid=setInterval(saydate,1000,"hello")


//normal assignment
let start=document.querySelector('#start')
start.addEventListener('click',function(){
    setInterval(saydate,1000,"hello")
},false)

let stop=document.querySelector('#stop')
stop.addEventListener('click',function(){
    clearInterval(intervalid)
    console.log("stoped")
},false)


</script>



</html>
