// task №1

// let str = 'js'

// console.log(str.toUpperCase())

// task №2

let arr = ['Two One', 'One One', 'One Two', 'Two Two']
let keyword = 'One'

const elementsWithSecondRow = (arr, str) => {
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase().endsWith(str.toLowerCase())) {
      newArr.push(arr[i])
    }
  }

  return newArr
}

console.log(elementsWithSecondRow(arr, keyword))