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