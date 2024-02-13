// Задание 1

let a = 10
alert(a)
a = 20
alert(a)

// Задание 2

const yearReleaseFirstIPhone = 2007
alert(`В ${yearReleaseFirstIPhone} году был представлен первый iphone`)

// Задание 3

const nameCreatorLanguageJs = 'Брендан Эйх'
alert(`Создателя языка программирования JavaScript зовут ${nameCreatorLanguageJs}`)

// Задание 4

const firstNum = 10
const secondNum = 2

alert(`Сумма двух переменных ${firstNum + secondNum}`)
alert(`Разность двух переменных ${firstNum - secondNum}`)
alert(`Произведение двух переменных ${firstNum * secondNum}`)
alert(`Деление двух переменных ${firstNum / secondNum}`)

// Задание 5

let result = 2 ** 5
alert(`Два в пятой степени будет ${result}`)

// Задание 6

a = 9 // переменная 'a' уже объявленна 
let b = 2
alert(`Остаток от деления двух переменных ${a % b}`)

// Задание 7

let num = 1;

// num = num + 5;
// num = num - 3;
// num = num * 7;
// num = num / 3;
// num = num + 1;
// num = num - 1;

num += 5
num -= 3
num *= 7
num /= 3
num++
num--

alert(num);

// Задание 8

const age = prompt('Сколько вам лет?')
alert(age)

// Задание 9.0

const user = {
  name: 'Vlad',
  age: 26,
  isAdmin: true
}

// Задание 9.1

user['cityOfResidence'] = 'Moscow'

// Задание 9.2

user.age = 20

// Задание 9.3

delete user['cityOfResidence']

// Задание 9.4

let info = prompt('Какую информацию хотите узнать о пользователе?')
alert(user[info])

// Задание 10

let nameUser = prompt(`Как тебя зовут?`)
alert(`Привет ${nameUser}`)