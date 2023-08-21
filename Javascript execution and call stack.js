// //Java script execution context


// //type
// //step 1
// // {}->global ec
// // function exeution context
// // eval execution context

// // //step2
// // {}->
// // memory creation phase
// // execution phase



// //example 
// let val1=10
// let val2=5
// function addnum(num1,num2){
//     let total=num1+num2
//     return total
// }
// let result =addnum(val1,val2)
// let result2=addnum(10,3)

// //steps for this code


// // 1->   global execution->this


// // 2->   memory phase

// //       val1->undefined
// //       val2->undefined
// //       addnum->defination
// //       result1->undefined
// //       result2->undefined


// //3-> execution phase
     
//      val1->10
//      val2->5
//      for result1
//      addnum->{new context create
//         again memory and execution phase

//         1)->memory phase

//         val1->undefined
//         val2->undefined
//         total->undefined


//         2)->execution context

//         num1->10
//         num2->5
//         total->15


//     result1=15

//     forresult2
//     addnum->new context same as Uppercase(memory+execution)
//     result2=12



//      }
           




/////call stack


// concept->last in first out

// |              |
// |    three()   |
// | _____________|
// |  two()       |
// | _____________|
// |  one()       |
// | ____________ |
// |global exec.  |
// |______________|

