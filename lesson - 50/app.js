// add & remove

const content = document.querySelector('p')
// console.log(content.classList)
content.classList.add('error')
// content.classList.remove('error')
// console.log(content.classList)

const para = document.querySelectorAll('p')
para.forEach((text) => {
	if (text.textContent.includes('error')) {
		text.classList.add('error')
	}
	if (text.textContent.includes('success')) {
		text.classList.add('success')
	}
})

//classListga ta`rif
// classList - bu elementning class atributidagi barcha klasslarni o'z ichiga olgan DOMTokenList obyekti. Bu obyekt yordamida biz elementga yangi klass qo'shish, mavjud klasslarni olib tashlash yoki tekshirish kabi amallarni bajarishimiz mumkin. classList orqali biz elementning ko'rinishini va uslubini dinamik ravishda boshqarishimiz mumkin.

// includes - bu JavaScript tilida string (matn) tipidagi o'zgaruvchilar uchun mavjud bo'lgan bir metod. Bu metod, berilgan matn ichida ma'lum bir substring (kichik matn) mavjudligini tekshiradi va natijada true yoki false qaytaradi. Misol uchun:

// const str = "Hello, world!";
// console.log(str.includes("world"));// true
// console.log(str.includes("JavaScript"));// false



const heading = document.querySelector('h1')
heading.classList.toggle('success') // agar success classi bo`lsa olib tashlaydi, bo`lmasa qo`shadi
// masalan
heading.classList.toggle('success') // yana chaqirsak, success classi bo`ladi
heading.classList.toggle('success') // yana chaqirsak, success classi olib tashlanadi

// toggle - bu JavaScript tilida classList obyektining bir metodidir. Bu metod, berilgan class adini elementning class ro'yxatida tekshiradi va agar mavjud bo'lsa, uni olib tashlaydi, agar mavjud bo'lmasa, uni qo'shadi. Bu metod yordamida biz elementning ko'rinishini va uslubini dinamik ravishda boshqarishimiz mumkin. Misol uchun:

// const element = document.querySelector('.my-element');
// element.classList.toggle('active'); // agar 'active' classi bo'lsa olib tashlaydi, bo'lmasa qo'shadi	

