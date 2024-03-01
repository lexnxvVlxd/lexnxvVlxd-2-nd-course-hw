// task №1

const arr = [1, 5, 4, 10, 0, 3]

for (let i = 0; i < arr.length; i++) {
  console.log(`Индекс массива: ${i} его значение ${arr[i]}`)

  if (arr[i] === 10) {
    console.log('Цикл остановлен в массиве есть элемент со значением "10"')
    break 
  }
}