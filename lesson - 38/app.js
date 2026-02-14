// callBack Function
const myFunc = (callbackFunc) => {
	let number = 50
	callbackFunc(number)
}

myFunc(function(value){
	console.log(value)
})

// bundan kelib chiqsak callBackFunction bu argument sifatida keladi
// va biz uni myFunc ichida chaqiramiz
// va chaqirilganda value ga 50 qiymatini beradi
// va biz uni console.log orqali chiqaramiz