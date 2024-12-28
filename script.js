



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

//Array methods :

//push (push keyword is used to add a value/ data in last in array)

// var bc = ["jai" , "gopi" , "shakti"]
// bc.push("sabari")
// console.log(bc);

// pop (pop keyword is used to remove the last data/value in an array)
// bc.pop()
// console.log(bc);

//unshift (this keyword is used to take an value in starting position or first place in an array)
// var ac = ["jai" , "gopi" , "shakti"]
// ac.unshift("sabari")
// console.log(ac);

//shift (used to remove first data in array)
// ac.shift()
// console.log(ac);

//concat 

// var fruits = ["apple","banana","orange"]
// var veg = ["carrot","tomato","cucumber"]
// var cos = ["powder","scent"]
// var cover = fruits.concat(veg,cos)
// console.log(cover);

//sort :
// var num = [2,1,8,4,9,7,6,5,3];
// num.sort((a,b) => a-b);
// console.log(num);

//if thr result of a-b is negative , a is placed before b.
//if the result is positive, b is placed before a.     //b a
//If the result is zero, the order remains unchanged (which is relevent for elements that are equal)

//Starting array : [2,1,8,4,9,7,6,5,3];

//comparision b/w 2 and 1 :
// 2-1 = 1 ; since the result is positive , 2 should come after 1.
//updated array :[1,2,8,4,9,7,6,5,3]

// var char = ["Shakthi","arivu","Jaya","balasundar","lokesh"]
// char.sort()
// console.log(char);

//slice : is used to cut the array based on indices

// var birds = ["eagle","vulture","peacock","pegion"]
// var slice = birds.slice(2,-1)
// console.log(slice);


//splice :

//syntax :
//var_name.splice(index,counter[0,1],actualvalue)
//0 => push and update the value
//1 =>override and update the value

// var weeks = ["sunday","monday","tuesday","thursday","saturday"]
// weeks.splice(3,0,"wednesday")
// weeks.splice(5,1,"friday")
// console.log(weeks);

//String methods:

//split:

// var greet = "hello world"
// var spl = greet.split(" ")
// console.log(spl);

//join:

// var j = spl.join(" ")
// console.log(j);

//reverse :

// var str = "javascript"
// var rev = str.split("").reverse().join("")
// console.log(rev);

//toUppercase:

// var up = "newyork"
// console.log(up.toUpperCase());

// tolowercase:

// var lo = "NEWYORK"
// console.log(lo.toLowerCase());

//includes :

// var inc = "logan"
// var inc2 = inc.includes("O")
// console.log(inc2);

//charAt:

// var char = "happy"
// console.log(char.charAt(1));

//substring :

// var sub = "goodmorning"
// console.log(sub.substring(4));

//repeat :
//  var rep = "hi"
//  console.log(rep.repeat(4));

//index of - first occurence

// var idx = "javascript"
// console.log(idx.indexOf("a"));


//lastindexof : prints last character value

// var lidx = "javascript"
//  console.log(lidx.lastIndexOf("a"));
 
//Object:
//collection of key and value pairs:

// const obj = {
//     name : "kali",
//     age : 12
// }
// obj.name = "vijay"
// console.log(obj);
// //value retrive :
// console.log(obj.name);
// console.log(obj.age);

//Nested arry and object :
//  var stdobj = [
// {
//     name : "bharath",
//     age : 12
// },
// {
//     name : "gokul",
//     age : 13
// },
// {
//     name : "gopal",
//     age : 14
// }
//  ]
// console.log(stdobj);

//passing indes :

// var stdobj = [
//     {
//         name : "bharath",
//         age : 12
//     },
//     {
//         name : "gokul",
//         age : 13
//     },
//     {
//         name : "gopal",
//         age : 14
//     }
//      ]
//     console.log(stdobj[1]);

//Object destructuring :

// var ofcobj = {
//     name : "deepak",
//     age : 12,
//     Dep : "It"
// }
// var{name,age,Dep} = ofcobj
// console.log(name,age,Dep);

//Task :

//office object => name,age,dep,id no [5] => destructuring [3] get

// var ofcobj = [
// {name : "vijay",
//    age :12,
//    dep : "IT",
//   IDNo : "I13" },
// {  name : "bharath",
//     age : 13,
//     dep : "CSE",
//   IDNo : "I31"},
//   {name : "gokul",
//     age :14,
//     dep : "ECE",
//   IDNo :"I21"},
//   {name : "rahul",
//     age :15,
//     dep : "Mech",
//   IDNo :"I122" },
//   {name : "prem",
//     age : 13,
//     dep : "bio",
//   IDNo : "I311" }
// ]
// var {name,age,dep,IDNo} = ofcobj[3]
// console.log(name,age,dep,IDNo);


//For methods :

//foreach
//syntax :

//var_name.foreach((value,index,actualarray)=>)

    // var weeks = ["sunday","monday","yuesday","wednesday","thursday"]
    //     weeks.forEach((val,idx,accarr)=> console.log(val,idx,accarr));
        
//forin
//forof






