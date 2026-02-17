// getAtribute & setAtribute
const link = document.querySelector('a')
link.getAttribute('href')
// yani getAtribute o`zlashtirib beradi bundan ko`rsak

link.setAttribute('href','https://www.yandex.ru')
// yani bunda esa almashtirib beradi
link.textContent = 'GO To Yandex Main Page'


// Keling endi biz p tegidagi class = 'error' ni 'sucsec' classiga aylantirb chiqamiz.
const text = document.querySelector('p')
console.log(text.getAttribute('class'))
text.setAttribute('class','sucsec')
// mana o`zgardi
console.log(text.getAttribute('class'))
// html codimga style beryabman
//get oladi 
// set qo`shib beradi
text.setAttribute('style','color:blue')
