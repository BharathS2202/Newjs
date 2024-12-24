



//How to write js code :

//Variable => container to store values

///Syntax : [Formulae]
//variable_type variable_name = value
//console.log(variable_name);

//Variable types :

//var

// var a = 10 // var can both redeclare and reassifn
// var a = 5
// console.log(a);

// var a = 10  // var can reassign
//     a = 5
// console.log(a);

//let => let can only reassign, it does not support redeclare

//const => const does not support both redeclare and reassign

//Datatypes :

//Primitive datatype :

//string - " " or ' '
// var a = "bharath";
//console.log(a);

//number - 1234 or 21.4
// var a = 10;
//console.log(a);

//boolean - true or false
// var a = 10
// var b = 5
// console.log(a>b);

//null
// var a = null;
//console.log(a);

//undefined
//var a
//console.log(a);

//Non primitive dadatypes :

// //array : [] => collection of multiple values and datas inside square bracket, it can store multiple datatypes....
// var a = ["hello", 5, null, true ]
// console.log(a);

// To print a particular value or data inside array we will use index value inside printing statement :
// var a = ["hello", 5, null, true ]
// console.log(a[3]); => true will be printed

// length starts with 1(1,2,3,4....)
// index value starts with 0(0,1,2,3....)

//object : {} => collection of key and value pairs inside flower bracket

// var ID = {
//     // key : value
//     name : "Bharath",
//     age : 24,
//     Dep : "B.sc" 
// } 
// console.log(ID);


//Function : block of code => we are going to write set of code and store it in function and we will use it when it is required

//function statement or declaration

//syntax :

//function var_name(){
// code
//}
//var_name()

// // function box(){
// console.log("toys");
// console.log("dresses");
// }
// box()

// parameter and arguement is used only inside function
//parameter - it acts like a variable_name
//arguement - it acts like a value

// function box2(x){ => parameter ( parameter should be given in paranthesis near variable name in function)
//     console.log(x);
// }
// box2(100) => arguement( is value given when the variable name is called outside function)

// return :

//  function box3(y){
//     return y
//  }
// console.log(box3("choclate"));

//function expression : storing a function under a variable name

//  var bigbox = function smallbox(){
//     console.log("toys"); 
//  }
//  bigbox()

    //var bigbox = function(){  => anonymous funcation (no variable name near function in function expression)
    //     console.log("toys"); 
    //  }
    //  bigbox()

//immediate invoke function expression [IIFE] : will not have variable name , we will use only parameter and value should be given or called 
 //                                                near flower bracket

//  var nam = (function(x){               
//     console.log(x);
// })(10)

//arrow function : short hand syntax

//syntax :
// () =>{ }

//   var arr = ()=>{console.log("iam arrow function"); }
//   arr()

//operators :

//Arithmatic operators
//+add, -sub, *mul, /div, %modulus[will give quotiest value], **exponent[will give remainder value], ++increment , --decrement

//Assignment 

// var an = 10
// an= 5
// console.log(an);

//Logical 

// && => and
// || => or
// != => not

//comparision
// < less tha , > greater than , <= less than or equal , >= greater than or equal

//Eqality

// double equals ==   => only checks and compares value , will not check datatype
// triple equals ===  => checks and compares values and datatypes..Will print true only when the datatypes are true

// var a = 10
// var b = "10"
// console.log(a==b);      => true

//  var a = "10"
//  var b = "10"
//  console.log(a===b);     => true

//Ternary operators :

// syntax :

//(condition) ? "statement_true" : "statement_false"

// var age = 20
// var limit = (age>=18 && age<=70) ? "he is eligible to vote " : "he is not eligible to vote"
// console.log(limit);

//Loop : program will continously excute untill the condition is met or executed

//conditional loop
//Infinity loop

// For loop :

//syntax :

// for(initialization ; condition ; iteration [increment ++, decrement --]){
             // code
//}

// for(var i = 0 ; i<=5 ; i++ ){
//     console.log(i);   
// }

// for(var i=5 ; i>0 ; i--){
//  console.log(i);
//  }

 //steps:

 //step1 => i = 0 => 0<5[trure]=> print = 0 =>0++ = 0+1 =1 
 //step2 => i = 1 => 1<5[trure]=> print = 1 =>1++ = 1+1 =2
 //step3 => i = 2 => 2<5[trure]=> print = 2 =>2++ = 2+1 =3
 //step4 => i = 3 => 3<5[trure]=> print = 3 =>3++ = 3+1 =4
 //step5 => i = 4 => 4<5[trure]=> print = 4 =>4++ = 4+1 =5
 //step6 => i = 5 => 5<5[false] // loop will stop

 //string :

// var str = "happy"

// for(var i=0 ; i<str.length ; i++){
//     console.log(str[i]);  
//  }

//  var str = "happy"
//  for(var i = str.length -1 ; i>=0 ; i-- ){   => to print happy in reverse(yppah)
//     console.log(str[i]);
//  }

// var str = "happy";
// var store = "";               // Temporary variable to store the store
// for (var i = str.length-1; i >= 0; i--) {
//     store += str[i]                                // Concatenate each character
// }
// console.log(store);

// count till 1 to 10

// var sum = 0
// for (i=0 ; i<=10 ; i++){
//     sum = sum+i
//     console.log(sum);
// }

//While loop : entry level condition checking loop

//syntax :

// let count = 0  //=> initiallzation
// while (count<5) {   //=> condition
//     console.log(count);   // =. printing statement
//     count++ // => iteration
// }

// Do While loop :
 
// let docount = 0
// do{
//     console.log(docount);
//     docount++
// }while(docount<5)

// if- else

// var age = 10
// if(age>=18 && age<=70){
//     console.log("he is eligible to vote");
// }else{
//     console.log("he is not eligible to vote"); 
// }

//els-if (can check multiple conditions)

var mark = 10
if(mark>=90){
    console.log("Grade A");
}else if(mark>=80){
    console.log("Grade B");
}else if (mark>=70){
    console.log("Grade c");
}else if(mark>=60){
    console.log("Grade D");
}else {
    console.log("Fail");
    
}