// calcCirle

// return

// const calcArea = function(radius) {
// 	calcCircle = Math.PI * Math.pow(radius,2)
// 	return calcCircle
// }

// calcRet = calcArea(10)
// console.log(calcRet)


// Arrow function bilan yozish usuli 

// const calcArea = (radius) => {
//  return (Math.PI * Math.pow(radius,2))
// }
// calcRet = calcArea(9)
// console.log(calcRet)

// const gret = () => {
// 	return 'Hello World'
// }
// const result = gret()
// console.log(result)
 
// ism familya orqali return qilish

// const greet = (name,surName) => {
//    area = `Hello  ${name} ${surName}`
// 	 return area
// }
// result = greet('Doniel','Sultanov')
// console.log(result)


// soliq xar bir mahsulotdan 20% soliq ushlab qolinsa olingan maxsulotlardan nechi foizi soliqqa tortiladi shunga dastur yozish kerak

// function exponation

// const bill = function(products,tax) {
// 	let total = 0
// 	for (i = 0; i<products.length; i++){
// 		total += products[i] + products[i]*tax 
// 	}

// 	return total
// }
// const result = bill([10000,20000,30000,40000],0.2)
// console.log(result)


// arrow function da  yozilish usuli
const bill = (products,tax) => {
	total = 0
	for(i<0;i<=products.length; i++) {
		total += total[i] + total[i]*tax
		return total
	}
	const result = bill([15000,25000,35000,45000],0.12) 

}