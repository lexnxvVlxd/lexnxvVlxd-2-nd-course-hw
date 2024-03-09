// task №1

// let str = 'js'

// console.log(str.toUpperCase())

// task №2

// let arr = ['Two One', 'One One', 'One Two', 'Two Two']
// let keyword = 'One'

// const elementsWithSecondRow = (arr, str) => {
//   let newArr = []

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toLowerCase().endsWith(str.toLowerCase())) {
//       newArr.push(arr[i])
//     }
//   }

//   return newArr
// }

// console.log(elementsWithSecondRow(arr, keyword))

// task №3

// let num = 32.58884

// console.log(`Округлённое число до меньшего ${Math.floor(num)}, 
// до большего ${Math.ceil(num)}, 
// до ближайшего ${Math.round(num)}`
// )

// task №4

// const arr = [52, 53, 49, 77, 21, 32]

// console.log(`Максимальное значение чисел: ${Math.max(...arr)}
// Минимальное значение чисел: ${Math.min(...arr)}`)

// task №5

// const randomNumber = () => {
//   let num = Math.floor(Math.random() * 10)
//   return num
// }

// console.log(randomNumber())

// task №6

// const arrRandomNumber = (num) => {
//   let arr = []

//   for (let i = 0; i < num / 2; i++) {
//     arr.push(Math.floor(Math.random() * num))
//   }

//   return arr
// }

// console.log(arrRandomNumber(50))

// task №7

// const randomNumber = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }

// console.log(randomNumber(10, 20))

// task №8

// let currentDate = new Date()
// console.log(currentDate.toLocaleDateString())

// task №9

// const currentDay = new Date().getDate()
// const dateIn73Days = new Date(new Date().setDate(currentDay + 73))
// console.log(dateIn73Days)

// task №10

// let currentDate = new Date()

// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
// "Пятница", "Суббота"]

// const months = ["Январь", "Февраль", "Марта", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

// let fullDate = `Дата: ${currentDate.getDate()} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()} — это ${days[currentDate.getDay()]}
// Время: ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`

// console.log(fullDate)

// task №11

const arrayWithWordsForGame = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
const regExp = /^[а-яА-Я]*$/

const gameTwoRandomWords = () => {

  let getRandomWordOne = arrayWithWordsForGame[Math.floor(Math.random() 
    * arrayWithWordsForGame.length)]

  let getRandomWordTwo = arrayWithWordsForGame[Math.floor(Math.random() 
    * arrayWithWordsForGame.length)]

  alert(`Запомни два слова: "${getRandomWordOne}" "${getRandomWordTwo}"`)

  alert('Отлично теперь посмотрим как ты их запомнил!')

  let userInputFirstWord = prompt('Какое было первое слово?').toLowerCase()
  let userInputSecondWord = prompt('Какое было второе слово?').toLowerCase()

  if (!regExp.test(userInputFirstWord) || !regExp.test(userInputSecondWord)) {
    return alert('Введены некорректные символы')
  }

  if (getRandomWordOne.toLowerCase() === userInputFirstWord 
  && getRandomWordTwo.toLowerCase() === userInputSecondWord) {
    return alert('Правильно!!!')
  } else if (getRandomWordOne.toLowerCase() === userInputFirstWord 
  || getRandomWordTwo.toLowerCase() === userInputSecondWord) {
    return alert('Почти что получилось одно слово оказалось не правильным.')
  } else {
    return alert('Неправильно!')
  }
}