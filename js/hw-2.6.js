// task №1

// const arr = [1, 5, 4, 10, 0, 3]

// for (let i = 0; i < arr.length; i++) {
//   console.log(`Индекс массива: ${i} его значение ${arr[i]}`)

//   if (arr[i] === 10) {
//     console.log('Цикл остановлен в массиве есть элемент со значением "10"')
//     break 
//   }
// }

// task №2

// const arr = [1, 5, 4, 10, 0, 3]

// arr.forEach((element, i) => {
//   if (element === 4) {
//     console.log(`Значение "${element}" нахоидтся в массиве под индексом: ${i}`)
//   }
// });

// task №3

// const arr = [1, 3, 5, 10, 20]

// let str = arr.join(' ')

// console.log(str)

// task №4

// const multidimensionalArr = []
// let numberIterations = 3

// for (let i = 0; i < numberIterations; i++) {
//   let subMultidimensionalArr = []

//   for (let i = 0; i < numberIterations; i++) {
//     subMultidimensionalArr.push(1)
//   }

//   multidimensionalArr.push(subMultidimensionalArr)
// }

// console.log(multidimensionalArr)


// task №5 

// const arr = [1, 1, 1]

// arr.push(2, 2, 2)

// console.log(arr)


// task №6

// const arr = [9, 8, 7, 'a', 6, 5]

// const filterArr = arr.sort().filter(num => typeof(num) === 'number')

// console.log(filterArr)

// task №7

// const arr = [9, 8, 7, 6, 5]

// const guessNumber = (num) => {
//   let inputNumber = Number(prompt('Угадай число которое я загал от 1 до 10'))

//   if (arr.includes(inputNumber)) {
//     return alert('Угадал')
//   } else {
//     return alert('Не правильно')
//   }
// }

// guessNumber()

// task №8

// let str = 'abcdef'

// str = str.split('').reverse().join('')

// console.log(str)

// task №9

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [4, 5, 6],
]

const newArr = [...arr[0], ...arr[1]]

console.log(newArr)