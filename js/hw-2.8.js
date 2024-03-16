// task №1

// const people = [
//   { name: 'Глеб', age: 29 },
//   { name: 'Анна', age: 17 },
//   { name: 'Олег', age: 7 },
//   { name: 'Оксана', age: 47 }
// ];

// people.sort((a, b) => a.age - b.age)

// console.log(people)

// task №2

// const arrNumbres = [3, -4, 1, 9, 11, -4]
// const people = [
//   {name: 'Глеб', gender: 'male'},
//   {name: 'Анна', gender: 'female'},
//   {name: 'Олег', gender: 'male'},
//   {name: 'Оксана', gender: 'female'}
// ];

// function isPositive(num) {
//   if (num > 0) {
//     return num
//   } 
// }

// function isMale(gender) {
//   if (gender.gender === 'male') {
//     return gender
//   }
// }

// function filter(arr, callback) {
//   let newArr = []

//   for (let i = 0; i < arr.length; i++) {

//     if (callback(arr[i])) {
//       newArr.push(callback(arr[i]))
//     }
//   }

//   return newArr
// }

// console.log(filter(arrNumbres, isPositive))
// console.log(filter(people, isMale))

// task №3 

  const interval = setInterval(() => {
    console.log(Date())
  }, 3000);

  setTimeout(() => {
    clearInterval(interval)
    console.log('30 секунд прошло')
  }, 33000);

// task №4

// function delayForSecond(callback) {
//   setTimeout(() => {
//     callback()
//   }, 1000);
// }

// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// })

// task №5

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) {  cb(); }
  }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
  console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:


// delayForSecond(() => sayHi('Глеб'))