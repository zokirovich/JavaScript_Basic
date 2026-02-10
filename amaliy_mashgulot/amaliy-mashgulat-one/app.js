// prompt - inputni chiqarib beradi 

ism = prompt("Ismingizni kiritng")
// console.log(ism)

let birinchiHarf = ism.charAt(0).toUpperCase()
let davomi = ism.slice(1).toLowerCase()
let result = birinchiHarf + davomi
console.log(davomi)

// alert - bu ma`lummotni chop etib beradi

alert(`Salom,${result}`) 

// chartAt() - String ichidan bitta belgini (harfni) olib beradi — index bo‘yicha
// slice() - Qisqa qilib aytsam: massiv yoki satr (string) dan bir bo‘lagini kesib olib beradi, lekin aslini o‘zgartirmaydi.
// toUpperCase() - harflarni katta qilib beradi
// toLowerCase() - harflarni kichik qilib beradi 
