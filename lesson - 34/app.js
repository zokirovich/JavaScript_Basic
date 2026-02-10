// return - qiymat qaytaruvchi function
// functionni argument va parametr bilan ishlatkan holimda 
// const sayHello = function(name,day = "kech") {
// 	console.log(`Hayirli ${day} ${name}`)
// }

// sayHello('Shokirjon')


// return

// const sayHello = function(name,day = 'kech'){
// 	korishish = `hayirli ${day} ${name}`
// 	return korishish
// }
// const korishishQiymat = sayHello('Shokirjon')
// console.log(korishishQiymat)
// 
// return orqali sharni yuzini topuvchi return function ishlash

const calcArea = function(radius) {
const area = Math.PI * Math.pow(radius,2)
return area 
} 

const calcCircle = calcArea(5)
console.log(calcCircle)

