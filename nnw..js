
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

function hello(callback){
    
        console.log("good morning");
    callback();
}
function hai(callback){
console.log("bye");
callback();
}
function hh(callback){
    console.log("new");
    callback();
}
function gg(){
    console.log("nnew");
    
}
hello(()=>{
    hai(()=>{
        hh(()=>{
            gg()
        })})})

        