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

// let obj = {
//   'Коля': '200',
//   'Вася': '300',
//   'Петя': '400'
// }

// for (let key in obj) {
//   console.log(`"${key}" - зарплата "${obj[key]}" долларов`)
// }

// Задание 5

// let n = 1000
// let num = 0

// while (n > 50) {
//   n /= 2
//   num += 1
// }

// console.log(`Если делить 1000 на 2 пока число не станет меньше 50 получится ${n}`)
// console.log(`Кол-во итераций ${num}`)

// Задание 6

let firstFriday = 1
let daysMonth = 31

for (let i = 0; firstFriday <= daysMonth; firstFriday += 7) {
  console.log(`Сегодня пятница, ${firstFriday} число. Необходимо подготовить отчет.`)
}