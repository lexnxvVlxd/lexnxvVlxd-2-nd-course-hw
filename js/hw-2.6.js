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

const arr = [9, 8, 7, 6, 5]

const guessNumber = (num) => {
  let inputNumber = Number(prompt('Угадай число которое я загал от 1 до 10'))

  if (Number.isNaN(inputNumber)) {
    alert('Ошибка: некорректное значение')
  } else if (arr.includes(inputNumber)) {
    return alert('Угадал')
  } else {
    return alert('Не правильно')
  }
}

guessNumber()

// task №8

// let str = 'abcdef'

// str = str.split('').reverse().join('')

// console.log(str)

// task №9

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [4, 5, 6],
// ]
// console.log(arr.flat())

// task №10

// const arr = [1, 3, 5, 2, 7, 9, 1, 4]
// let sumArr = 0 

// for (let i = 0; i < arr.length; i++) {
//   sumArr = arr[i] + arr[i + 1]

//   if (Number.isNaN(sumArr)) {
//     break
//   }

//   console.log(`Сумма значений массива ${sumArr}`)
// }

// task №11

// const arr = [1, 3, 5, 2, 7, 9, 1, 4]

// const squareNumbers = (arr) => {
//   return arr.map(sqr => sqr ** 2)
// }

// console.log(squareNumbers(arr))

// task №12

// const arr = ['one', 'two', 'three', 'four', 'five', 'skypro']

// const lineLength = (arr) => {
//   return arr.map(lng => lng.length)
// }

// console.log(lineLength(arr))

// task №13

// const arr = [1, -3, -5, -2, 7, -9, 1, -4]

// const filterNegativeNumber = (arr) => {
//   return arr.filter(ngtArr => ngtArr < 0)
// }

// console.log(filterNegativeNumber(arr))

// task №14

// const array = []

// const getRandomNumber = (min, max) => {
//   return Math.round(Math.random() * (max - min) + min)
// }

// for (let i = 0; i <= 10; i++) {
//   array.push(getRandomNumber(0, 10))
// }

// const evenNumbersArray = (arr) => {
//   let evenArray = arr.filter(evn => evn % 2 === 0)
//   return evenArray
// }

// console.log(array)
// console.log(evenNumbersArray(array))

// task №15

// const array = []

// const getRandomNumber = (min, max) => {
//   return Math.round(Math.random() * (max - min) + min)
// }

// for (let i = 0; i < 6; i++) {
//   array.push(getRandomNumber(0, 10))
// }

// const averageArr = (arr) => {
//   sumArr = arr.reduce((total, num) => total + num)
//   avrArr = sumArr / arr.length
//   return avrArr.toFixed(2)
// } 

// console.log(averageArr(array))