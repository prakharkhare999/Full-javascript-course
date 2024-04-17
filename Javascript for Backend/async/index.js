//sync - >line by line
//async - >  the nature is async .


//when we want to use async in function

/*
async function abcd(){
    await fetch();
}
*/

async function abcd(){
   var blob= await fetch();
   var ans=await blob.json();
   console.log(ans)
}
abcd();