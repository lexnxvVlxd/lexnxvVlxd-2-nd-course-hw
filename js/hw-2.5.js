const gameSeasons = () => {

  let entryNumber = Number(prompt('Номер месяца'))

  switch (entryNumber) {
    case 0:
      return
    case 12:
    case 1:
    case 2:
      return alert('Зима!')
    case 3:
    case 4:
    case 5:
      return alert('Весна!')
    case 6:
    case 7:
    case 8:
      return alert('Лето!')
    case 9:
    case 10:
    case 11:
      return alert('Осень!')
    default:
      return alert('что то пошло не так')
  }
}