// block scope qovislab bilan ishlash
let age = 24 // global scope ichida age o'zgaruvchisi yaratildi va unga 24 qiymati berildi
console.log('Kiritilgan age:',age)
if (true) {
    let age = 215 // block scope ichida age o'zgaruvchisi yaratildi va unga 215 qiymati berildi
console.log('Kiritilgan age:',age) // block scope ichida age o'zgaruvchisi yaratildi va unga 215 qiymati berildi
if (true) {
    console.log("Ota scopdan ma`lumotlarni oladi")
}
}
console.log('Kiritilgan age:',age)

