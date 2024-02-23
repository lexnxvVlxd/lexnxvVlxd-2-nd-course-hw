//task №1

// const calculatesSmallerNumber = (numberOne, numberTwo) => {
//   return numberOne <= numberTwo ? numberOne : numberTwo
// }

//task №2

// const checksNumberIsEven = (number) => {
//   return number % 2 === 0 ? 'Это чётное число' : 'Это не чётное число'
// }

//task №3

// const squaresNumber = (number) => {
//   return number * number
// }

//task №4 

// const checksAge = () => {
//   let userAge = prompt('Сколько вам лет?')

//   if (userAge < 0) {
//     return 'Вы ввели неправильное значение'
//   } else if (userAge === null) {
//     return
//   } else if (userAge >= 0 && userAge <= 12) {
//     return 'Привет, друг!'
//   } else if (userAge >= 13) {
//     return 'Добро пожаловать!'
//   }
// }

// console.log(checksAge())

//task №5

// const multiplyNumbers = (num1, num2) => {
//   return !Number.isNaN(num1 * num2) ? 
//   num1 * num2 : 'Одно или оба значения не являются числом';
// }

//task №6

const CubeNumber = () => {
  let enteredNumber = prompt('Введите любое число')

  if (enteredNumber === null) {
    return
  } else if (!Number.isNaN(enteredNumber ** 3)) {
    return `${enteredNumber} в кубе равняется <${enteredNumber ** 3}>`
  } else {
    return 'Одно или оба значения не являются числом'
  }
}

console.log(CubeNumber())