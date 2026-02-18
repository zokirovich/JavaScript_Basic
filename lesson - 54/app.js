const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click',() => {	
	const li = document.createElement('li')
	li.textContent = 'yangi TextContent'
	ul.appendChild(li) // bunda eng past elementlardan qo`shib boriiladi
})

const iteams = document.querySelectorAll('li')

// iteams.forEach((iteam) => {
// 	iteam.addEventListener('click', (e) => { 
// 	// e.target.remove()
// 	console.log("CLICKED LI")
// 	// e.stopPropagation() // otasiga tasir qilmasligi uchun ishlatiladi
	
// 	})
// }) 
ul.addEventListener('click', (e) => {
	// console.log(e.target) // bunda otasidan kelayotgan ma`lumotni targit otasining bolasiga o`tkazim uni qiymatini ya li ni chiqazib beradi.Bundan kelib chiqadiqi biz yangi li larni qo`shgan paytimiz ularni ustida amallar bajarib chiqa olamiz.
	e.target.remove()
})