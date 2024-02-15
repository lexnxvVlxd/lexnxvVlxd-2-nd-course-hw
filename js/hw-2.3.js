// Задание 1

// let password = 'пароль'
// let enterPassword = prompt('Введите пароль')
// let passwordEntryResult = (enterPassword === password) ? console.log('Пароль введен верно') : console.log('Пароль введен неправильно')

// Задание 2

// let c = prompt('Введите число от 0 до 10')
// let resultTask2 = (c > 0 && c < 10) ? console.log('Верно') : console.log('Не верно')

// Задание 3

// Условие где одна из переменных больше 100

// let d = 455
// let e = 11

// Условие где переменные меньше 100

// d = 45
// e = 11

// let resultTask3 = (d > 100 || e > 100) ? console.log('Верно') : console.log('Не верно')

// Задание 4

// let a = '2'
// let b = '3'

// alert(Number(a) + Number(b))

// Задание 5

let monthNumber = 12

switch (monthNumber) {
  case 12:
    console.log('Декабрь пренадлежит сезону "Зима"')
    break

  case 1:
    console.log('Январь пренадлежит сезону "Зима"')
    break

  case 2:
    console.log('Февраль пренадлежит сезону "Зима"')
    break

  case 3:
    console.log('Март пренадлежит сезону "Весна"')
    break

  case 4:
    console.log('Апрель пренадлежит сезону "Весна"')
    break

  case 5:
    console.log('Май пренадлежит сезону "Весна"')
    break

  case 6:
    console.log('Июнь пренадлежит сезону "Лето"')
    break

  case 7:
    console.log('Июль пренадлежит сезону "Лето"')
    break

  case 8:
    console.log('Август пренадлежит сезону "Лето"')
    break

  case 9:
    console.log('Сентябрь пренадлежит сезону "Осень"')
    break

  case 10:
    console.log('Октябрь пренадлежит сезону "Осень"')
    break

  case 11:
    console.log('Ноябрь пренадлежит сезону "Осень"')
    break

  default:
  console.log('что то пошло не так')
    break
}