// Objectni ichida arraylar 

const users = {
	name: 'shokirjon',
	firsName: 'samandarov',
	age: 24,
	email: 'samandarovshakirjon@gmail.com',
	location: 'Xorazm',
	langs: ['rus','eng','uzb'],
	login: function() {
		console.log('Siz sahifangizga kirdingiz.')
	},
	logut: function() {
		console.log('Siz sahifangizdan chiqib kettingiz!')
	},
	speaks: function() {
// this
			(this.langs.forEach((lang) => {
				console.log(`Men ${lang} tilida gapira olaman!`)
			}))
		}
	}
// thisga ta`rif beramiz
// this - bu objectning o`ziga ishora qiluvchi kalit so`z
// this orqali biz objectning o`ziga murojaat qilamiz va uning ichidagi malumotlarga erishamiz

users.speaks()


// array ichida objectlar

const movies = [
	{ name: 'Avatar', year: 2009, genre: 'fantasy' },
	{ name: 'Inception', year: 2010, genre: 'sci-fi' },
	{ name: 'The Dark Knight', year: 2008, genre: 'action' },
	{ name: 'Interstellar', year: 2014, genre: 'sci-fi' },
	{ name: 'The Matrix', year: 1999, genre: 'sci-fi' },
	{ name: 'Pulp Fiction', year: 1994, genre: 'crime' }, 
]
movies.forEach((movie) => {
	console.log(movie.name.toUpperCase())
  const result = ` Mening sevimli kinoyim bu ${movie.name} u ${movie.year} yilda ishlab chiqilgan,uning ganri ${movie.genre}`
	console.log(result)


})

