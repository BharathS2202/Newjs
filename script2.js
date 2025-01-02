
//Timeout :

// console.log("start");
// setTimeout(() => {
//     console.log("delayed");
    
// }, 1000);
// console.log("end");

//calback => excecute the function within another function 

// function hello(callback){
//     setTimeout(() => {
//         console.log("good morning");
//     }, 2000);
//     callback();
// } 
// function hai(){
// console.log("bye");
// }hello(hai);

//callback hell:

// function hello(callback){
    
//         console.log("good morning");
//     callback();
// }
// function hai(callback){
// console.log("bye");
// callback();
// }
// function hh(callback){
//     console.log("new");
//     callback();
// }
// function gg(){
//     console.log("nnew");
    
// }
// hello(()=>{
//     hai(()=>{
//         hh(()=>{
//             gg()
//         })})})

//class => it is a blueprint that contains methods and object

// class JSclass{
//     setName(name1){
//         this.name = name1;
//     }
//     setage(age1){
//         this.age = age1;
//     }
// printing(){
//     console.log(`my name is ${this.name}
//         My age is ${this.age}`);
// }
// }
// const per = new JSclass();
// per.setName("bharath");
// per.setage(23);
// per.printing();

//promise : It is an object that handles asynchronous operation in synchronous way

// .then => to call resolve
// .catch => to call reject

// let mypro = new Promise((resolve, reject) => {
//   let success = true;
//   if(success){
//     resolve("passed");
//   }  
//   else{
//     reject("failed");
//   }
// });
// mypro
// .then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//     console.log(error);
// })    

// const p1 = Promise.resolve(`promise 1`)
// const p2 = new Promise((resolve)=>{
//     setTimeout(() => {
//         resolve(`promise 2`)
//     }, 2000);
// })
// const p3 = Promise.resolve(`promise 3`)

// Promise.all([p1,p2,p3])
// .then((value)=>{
//     console.log(value);
// })

//constructor :

// class cons{
//     constructor(name,age){
//         this.name = name;
//         this.age = age ;
//     }
//     person(){
//         console.log(`name is ${this.name}
// age is ${this.age}`);
//     }
// }
// const cl = new cons("nitheesh",24);
// cl.person();

// async (params) => {
//     await
// }


// const input = "iam bharath";

// const normalizedString = input.toLowerCase().replace(/\s+/g, "");

// const charFrequency = {};

// for (const char of normalizedString) {
//   charFrequency[char] = (charFrequency[char] || 0) + 1;
// }

// let duplicateCount = 0;
// for (const char in charFrequency) {
//   if (charFrequency[char] > 1) {
//     duplicateCount++;
//   }
// }
// console.log(`Number of duplicate letters: ${duplicateCount}`);

//const input = "i iam bharath";

// Remove spaces and reverse the characters
// let reversed = "";
// for (let i = input.length - 1; i >= 0; i--) {
//   if (input[i] !== " ") {
//     reversed += input[i];
//   }
// }
// console.log(reversed);


// const fetchData = async () => {
//   const promise = new Promise((resolve) => {
//       setTimeout(() => resolve("Data fetched successfully!"), 1000);
//   });
  
//   const result = await promise;
//   console.log(result);
// };

// fetchData();

