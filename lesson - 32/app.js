// javaScriptda biror narsani qayta ishlatish uchun biz funksiyalardan foydalanamiz.
// function - bu biror narsani qayta ishlatish uchun yozilgan kod blokidir.
// javaScriptda uchta funksiya turi mavjud:
// Function Declaration
// Function Expression
// Arrow Function

// Function Declaration

sayHello();
function sayHello(){
	console.log('HelloWorld');
	
}
// TDZ - Temporal Dead Zone
// TDZ - bu biror o'zgaruvchi yoki funksiya e'lon qilingan, ammo hali qiymat berilmagan vaqt oralig'idir. TDZ davomida, o'zgaruvchi yoki funksiya ishlatilganda, ReferenceError xatosi yuzaga keladi. TDZ, let va const bilan e'lon qilingan o'zgaruvchilar uchun mavjud, function declarationlar esa TDZga ta'sir qilmaydi.

// var TDZga ta'sir qiladi, chunki var bilan e'lon qilingan o'zgaruvchilar hoisting qilinadi va TDZga kirmaydi. TDZ, let va const bilan e'lon qilingan o'zgaruvchilar uchun mavjud, function declarationlar esa TDZga ta'sir qilmaydi.

// Function Expression
// const sayHello = function(){
// 	console.log('Hello World');
// }

// Arrow Function
// const sayHello = () => {
// 	console.log('Hello World');
// }