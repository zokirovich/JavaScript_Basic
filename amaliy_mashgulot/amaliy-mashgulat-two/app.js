//  1) promptdan ism va yosh kiritilsa kiritilgan yosh orqali ushbu ma`lumotlar hisoblanib berilishi kerak 
// tug`ilgan yili (1998), yashagan oy, hafta,kun,saot, daqiqa, soniya  
// let name = prompt('Ismingizni kiritng:')
// let  age = prompt('Yoshingizni kiriting:')
// let resalt = `${name} ${2026-age}da tug'ilgan u ${age*12} oy yaxshagan, ${age*12*54} hafta yashagan.
// 
// alert(resalt)
// 2) ismlar array`i ichidan promptdan so`rayotgan isim bo`lsa unda ha bunday ism bor agar bo`lmasa afsus bunday ism yo`q degan javob qaytarsin
// let ism = prompt('Ismingizni kiriting:')
// let names = ['ali', 'vali', 'hasan', 'husan', 'olim']
// let bor = false
// for (let i = 0; i <= names.length; i++ ) {
//     if (ism === names[i]) {
//         bor = true
//         break
//     } 
// }
//     if (bor) {
//         console.log('Bunday foydalanuvchi tizimda mavjud')
//     } else {
//         ism = prompt('unday foydalanuvchi tizimda mavjud emas:')
//     }


// 3) Array ichidagi ismlarning ohiriga bek so`zini qo`shing

// const names = ['Shokir','Xursand','Kamron']
// let name = ''
// for (let i = 0; i<names.length; i++) {
//     console.log(`${names[i]}bek`) 
// }

// 4) promtdan kiritilgan viloyat nomi orqali o`sha viloyatda qancha aholi borligini chiqaring.
// viloyatlar = {
//     'samarqand': 4360070,
//     'farg`ona': 4204284,
//     'qQashqadaryo': 3697658,
//     'andijon':3507220,
//     'namangan' : 3177070,
//     'toshkent' : 3164030,
//     'toshkent shahri': 3148569,
//     'surxondaryo' :	2994070,
//     'buxoro' : 2099069,
//     'xorazm' : 2059078,
//     'qoraqalpog`iston' : 2046890,
//     'jizzax' : 1559883,
//     'navoiy' : 1108595,
//     'sirdaryo' : 942630,
// }
const viloyatNomi = prompt('Viloyatni kiriting:').toLowerCase()
switch (viloyatNomi){
    case "farg`ona":
    alert('Farg`ona viloyatida 4204284 ta aholi bor')
    break
    case "samarqand":
    alert('samarqand viloyatida 4360070 ta aholi bor')
    break
    case "qashqadaryo":
    alert('Farg`ona viloyatida 4204284 ta aholi bor')
    break
    case "Farg`ona":
    alert('Farg`ona viloyatida 4204284 ta aholi bor')
    break
    case "Farg`ona":
    alert('Farg`ona viloyatida 4204284 ta aholi bor')
    break
    case "Farg`ona":
    alert('Farg`ona viloyatida 4204284 ta aholi bor')
    break
    case "Farg`ona":
    alert('Farg`ona viloyatida 4204284 ta aholi bor')
    break
}


// Foydalanuvchi prompt orqali matn kiritadi va kiritilgan belgilar soni belgilangan me’yor bilan solishtirilib, agar me’yordan oshsa nechta belgi ortiqcha yozgani, kam bo‘lsa nechta belgi yozgani va yana nechta belgi kiritishi kerakligi, teng bo‘lsa esa me’yor bajarilgani haqida ma’lumot chiqariladi.

const promtgaKirit = prompt('Matn kiriting:')
promtuzunligi = 10
if (promtgaKirit.length < 10) {
alert('Kiritilgan matn uzunligi 8 belgidan kam, ' + (promtuzunligi - promtgaKirit.length) + 'ta belgi kiritishingiz kerak')
} else if (promtgaKirit.length > 10) {
    alert('Kiritilgan matn uzunligi 10 belgidan ko`p, ' + (promtgaKirit.length - promtuzunligi) + 'ta belgi ortiqcha yozgansiz')
} else {
    alert('Kiritilgan matn uzunligi me`yorga to`g`ri keladi')
}