// // function declaration+
// foo() // TDZ ga kirmaydi
// function foo() {
// 	console.log("Function Declaration");
// }
// // function expression+
// const sayHello = function(){
// 	console.log("Function Expression");
// }
// sayHello() // TDZ ga kirmaydi

// // sayHello() // TDZ ga kiradi

// // arrow function+
// const sayHi = () => {
// 	console.log("Arrow Function");
// }		

// sayHi() // TDZ ga kirmaydi


// var a
// console.log(a)
// a=15 // undefined - aniqlanmagan var TDZ ga tushadi va hositing bo`ladi.

let b
console.log(b)
b=15  // bunda TDZ ga tushmaydi chunki let va const o`zgaruvchilari TDZ ga tushadi va hositing bo`lmaydi.
