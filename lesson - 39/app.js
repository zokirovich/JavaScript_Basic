// Ismlar keladi va uni ohiriga "Bek" so`zini qo`shadigan forEach orqali dastur yozing


const ismlar = ['asad','muhammad','aziz','doniyor','farxod']
// for loop operatori
// for (let i = 0; i < ismlar.length; i++) {
// 	console.log(ismlar[i]);
// }
// forEach methods
ismlar.forEach((ism) => {
	const newName = ism.charAt(0).toUpperCase()+ism.slice(1).toLowerCase() + 'bek'
	console.log(newName)
})

// ishlatilgan methodalar
// forEach - arrow function yordamida yoziladi va argumentiga royhatdagi barcha elementlar tenglanadi 
// charAt() - methodi bu bitta elementni oladi va u 0 chi indeksdan olib ishlaydi
// slice() - methodi bu bitta elementni oladi va u 0 chi indeksdan olib ishlaydi 
// toUpperCase() - methodi bu bitta elementni katta harfga aylantiradi
// toLowerCase() - methodi bu bitta elementni kichik harfga aylantiradi
// console.log() - methodi bu bitta elementni konsolga chiqaradi
// charAt(0) - bu bitta elementni 0 chi indeksidan oladi
// slice(1) - bu bitta elementni 1 chi indeksidan oladi
// + 'bek' - bu bitta elementga 'bek' so'zini qo'shadi
// console.log(newName) - bu yangi olingan elementni konsolga chiqaradi