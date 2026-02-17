// textContent
// innerHTML




// textContent
// const headerTitle = document.querySelector('#title')
// console.log(headerTitle)
// headerTitle.textContent += ' New content'


// mashq
// shu yerda list iteamlarni iziga darslari so`zini yozishni ko`rib chiqamiz
// const listIteam = document.querySelectorAll('.list-iteam')
// listIteam.forEach((iteam) => {
// 	iteam.textContent +=  ' dasturlash kursi'
// })

// innerHTML
const titleList = document.querySelector('#title')
titleList.innerHTML += ' <i>New text</i>'
// innerHTML orqali biz HTML elementlarini ham qo`shishimiz mumkin, textContent orqali esa faqat matn qo`shishimiz mumkin.