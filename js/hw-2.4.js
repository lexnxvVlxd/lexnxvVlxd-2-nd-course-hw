// Задание 1

// for (let i = 2; i > 0; i--) {
//   console.log('Привет')
// }

// Задание 2

// const number = 5

// for (let i = 1; i <= number; i++) {
//   console.log(i)
// }

// Задание 3

// const number = 22

// for (let i = 7; i <= number; i++) {
//   console.log(i)
// }

// Задание 4

let obj = {
  'Коля': '200',
  'Вася': '300',
  'Петя': '400'
}

for (let key in obj) {
  console.log(`"${key}" - зарплата "${obj[key]}" долларов`)
}