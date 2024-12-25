
// // // //console


// // // var sugarbox = "sugar"

// // // console.log(sugarbox)


// // // //data types 

// // // //primitive

// // // //non primitive



// // // // var

// // // // let

// // // // const

// // // // what is variable


// // // var a = 10;   //redeclare
// // //     a = 5;     // reassign
// // // console.log(a);


// // // // var data type is support redeclare values and resign values


// // // // let variables


// // // // let a = 5;  //it's cannot redeclared
// // // //     a = 10;  // it's support reassign
// // // // console.log(a);


// // // // let data type is not support redeclared values
// // // // let data type is support reassign values


// // // // const a = 10;  // it's cannot redeclared
// // // //       a = 10;  // it's cannot reassign
// // // // console.log(a);


// // //  //const data type not support redeclard and reassign values


// // //  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//



// // //                                      //Non primitive


// // //  //array  - [] - collection of values and datas within the square brackerts


// // //  const arr = ["hello",10,10.9,false,null]
// // //  console.log(arr[3]);


// // //  //length = starts with 1
// // //  //index = starts with 0
// // //  //length-1 = index

 

// // //                                 //what is object

// // //                                 //object-{} collection of key and value pairs

// // //    const obj ={
// // //     name:"sharvesh",
// // //     age:25,
// // //     std:x11
// // //    }
// // //    console.log(obj);
   

// // //    //syntax

// // //   //  key : values;

// // // //  const obj = {

// // // //     //name:value

// // // // id : 156,
// // // // name: "sharvesh",
// // // // age : 25

// // // // }

// // // // obj()


// // // //what is function

// // // //function : block of code

// // // //function var_name(){
// // // //code

// // // //}

// // // //var_name()


// // // // function house(){
// // // //     var boy = "birth"
    
// // // // }
// // // // house()


// // // // parameter & arguments :

// // // // parameter- is like an variable_name

// // // //arguments- is like an value


// // // function box(x){
// // //     console.log(x);
    
// // // }

// // // box(10) // arguments<=> value



// // // var a = 100
// // // console.log(a);


// // // //return statement

// // // function box(x) {
// // //     return x
// // // }
// // // console.log(box("hello js"))



// // // // function expressions

// // // var bigbox = function smallbox(){
// // //     console.log("Teddy bear here");
    
// // // }

// // // bigbox()


// // // function test(x,y){
// // //     console.log(" hello " + x + " how are you " + y);
    
// // // }
// // // test("jai", "shrish")




// // // function test (x,y,z){

// // //     console.log(" Hi " +  x + " how are you " + y  +  " welcome "  + z   );
    
// // // }
// // // test("sharvesh", "raju", "seshan")



// // // //imediate invoke function expressions

// // // // it is global level
// // // // it is support only before functions name is not there its working
// // // //othervise you store the variable name in function

// // // (function(x){
// // //     console.log(x);
    
// // // }
// // // ) ("java")


// // // // var name = (function(x)){
// // // console.log(x);

// // // //}("java")

// // // //arrow function : short hand system:

// // // //syntax:
// // // //()=> {}

// // //     var arrow =(x) => {console.log(x)}

// // //     arrow("happy")


// // //     //operators:
// // //     //Arithmetic operator  (add,sub,mull,div,modules,exponent(power value),increment,decrement)
// // //     //Assignment operator
// // //     //Logical operator
// // //     //Equality operator
// // //     //comparsion operator
// // //     //ternary operator

    

// // //     //Arithmetic operator (addition)  (it is create two vari)

// // //     var num = 2
// // //     var num1 =10
// // //     console.log(num+num1);



// // //     var num = 2
// // //     var num1=5
// // //     console.log(num*num); // 2*5 // 2*2*2*2*2



// // //     //Assignment operator  (mulitiple values stored in one variable)

// // //     var num = 10
// // //     num += 50
// // //     console.log(num);
    


// // //     //Logical operator:

// // //     //&& =>And
// // //     // || => or
// // //     // ! => not
    

// // //     var num = 10
// // //     var num2 = 10
// // //     console.log(num !=num2);


// // //     //Equality operator [interview questions]
// // //     //double equals[loose equality]
// // //     // it only check the values not the data type

// // //     var de = 10
// // //     var de2 = "10"
// // //     console.log(de==de2);


// // //     //triple equals === (strictly equality)
// // //     // it wil check both the values and data types)

// // //     var de = 10
// // //     var de2 = "10"
// // //     console.log(de===de2);


// // //     //Compression operator

// // //     var de = 10
// // //     var de2 = 10
// // //     console.log(de<de2);

// // //     //Ternary operator

// // //     //syntax :

// // //     //(condition) ? "statement_true" : "statement_false"


// // // var age = 25
// // // var limit = (age>18) ? "he is eligible" : "he is not eligible"

// // // console.log(limit);

// // //LOOP: (4th class)
// // // 1.For loop

// // //Syntax:
// // //for(initialization ; conditio ; iteration[increment==, decrement --]){
// // //code
// // //}

// // // for(var i=0 ; i<5 ; i++){
// // // console.log(i);
// // //}

// // //steps:

// // //step1 => i = 0 => 0<5[trure]=> print = 0 =>0++ = 0+1 =1 
// // //step2 => i = 1 => 1<5[trure]=> print = 1 =>1++ = 1+1 =2
// // //step3 => i = 2 => 2<5[trure]=> print = 2 =>2++ = 2+1 =3
// // //step4 => i = 3 => 3<5[trure]=> print = 3 =>3++ = 3+1 =4
// // //step5 => i = 4 => 4<5[trure]=> print = 4 =>4++ = 4+1 =5
// // //step6 => i = 5 => 5<5[false] // loop will stop

//string :

// var str = "happy"

// for(var i=0 ; i<str.length ; i++){
//     console.log(str[i]);  
//  }
 
//  var str = "happy";

// for (var i = str.length - 1; i >=0; i--) {
//     console.log(str[i]);
// }

// // // 2.While loop
// // // 3.Do while loop

// //let name = "bharath"
// //let age = 56;
// //console.log(`hello ${name}`); // template literal

// //While loop

// //Syntax :
// //While (condition) {
// //}

// // var num = 1;
// // while (num <= 5){
// //     console.log(num);
// //     num++
// // }

// // dowhile syntax :
// let d = 1;
// do {
//     console.log(d);
//     d++
    
// } while (d<=5);

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

