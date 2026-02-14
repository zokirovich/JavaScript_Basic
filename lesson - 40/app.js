// object 
// object nima?
// object - bu bir nechta qiymatlarni bitta o'zgaruvchida saqlashga imkon beruvchi ma'lumot turi.
// object - bu kalit-qiymat juftliklaridan iborat ma'lumot tuzilmasi.
// object - bu o'zgaruvchilarni guruhlash uchun ishlatiladi.
// object da kalitlar (keys) va qiymatlar (values) mavjud. Kalitlar string yoki symbol bo'lishi mumkin, qiymatlar esa har qanday ma'lumot turi bo'lishi mumkin.
// objectda property - bu objectning kalit-qiymat juftligi. Masalan, {name: "John", age: 30} objectida name va age propertylar mavjud.

// objectda methids - bu objectning funksiyalari. Masalan, {name: "John", age: 30, greet: function() { console.log("Hello!"); }} objectida greet methodi mavjud.

// object yaratish usullari:
// 1. Object literal syntax
// 2. Object constructor
// 3. Object.create() methodi
// 4. ES6 class syntax
// 1. Object literal syntax
const person = {
		name: "John",
		age: 30,
		greet: function() {
				console.log("Hello!");
		}
};

// 2. Object constructor
function Person(name, age) {
		this.name = name;
		this.age = age;
		this.greet = function() {
				console.log("Hello!");
		}
}
const person1 = new Person("John", 30);
// 3. Object.create() methodi
const person2 = Object.create(person);
person2.name = "Jane";
person2.age = 25;
// 4. ES6 class syntax
class PersonClass {

		constructor(name, age) {
				this.name = name;
				this.age = age;
		}		
		greet() {
				console.log("Hello!");
		}
}
const person3 = new PersonClass("John", 30);	