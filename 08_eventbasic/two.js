<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>chai code</h1>
<button id="stop">stop</button>


    
</body>

<script>
   const sayprakhar= setTimeout(function(){

        //bs ek bar execute hoga
        console.log("prakhar")

    },2000)
    const changetext=setTimeout(function(){
        document.querySelector('h1').innerHTML="best JS series"
    })


//give the reference of the function
    setTimeout(changetext,2000)

//give the reference of the timeout function which we want to clear   
//clearTimeout()


const changeme=setTimeout(changetext,2000)
document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changeme)
    console.log("stopped")
})


 

</script>

</html>
