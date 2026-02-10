/*
* 	Argumentlar va Parametrlar
*/
// Argumentlar - bu funksiyaga uzatiladigan qiymatlar
// Parametrlar - bu funksiyaning qabul qiladigan qiymatlari

function sum(a,b){
	console.log(a+b);
	
}
// sum(3,5) // 8  pythonda qanaqa ishlasa JS da ham, shunaqa ishlaydi
// Ustozga salom beradigan function yaratamiz!
const sayHello = function(name,fan){
     console.log(`${name} ustoz Assalomu alaykum`);3
		 console.log(`${fan} fanidan sizga savolim bor edi`);3
		 console.log(`a sonim 3 va b sonim 5 ga teng bo'lsa ularning yig'indisi nechioga teng bo'ladi" `)
		 yigindi = sum(3,5)
		 console.log(`javob ${yigindi} ga teng bo'ladi`);
		 
}
sayHello("Azizbek","Matematika")  // Azizbek ustoz Assalomu alaykum


