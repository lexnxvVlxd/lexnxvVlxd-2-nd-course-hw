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

const checksAge = () => {
  let userAge = prompt('Сколько вам лет?')

  if (userAge < 0) {
    return 'Вы ввели неправильное значение'
  } else if (userAge === null) {
    return
  } else if (userAge >= 0 && userAge <= 12) {
    return 'Привет, друг!'
  } else if (userAge >= 13) {
    return 'Добро пожаловать!'
  }
}

console.log(checksAge())