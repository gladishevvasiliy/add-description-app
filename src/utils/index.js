export const getDependency = (value) => {
  switch (value) {
    case -1:
      return "От предыдущего"
    case 0:
      return "Нет"
    case 1:
      return "От следующего"
    default:
      return "Нет"
  }
}
export const getDirection = (value) => {
  switch (value) {
    case -1:
      return "Вниз"
    case 0:
      return "Равенство"
    case 1:
      return "Вверх"
    default:
      return "Равенство"
  }
}
export const getLength = (value) => {
  switch (value) {
    case 1:
      return "1/8"
    case 2:
      return "1/4"
    case 4:
      return "1/2"
    case 6:
      return "3/4"
    case 8:
      return "4/4"
    default:
      return "1/2"
  }
}
export const getPitch = (value) => {
  switch (value) {
    case 1:
      return "Ут низкое"
    case 2:
      return "Ре низкое"
    case 3:
      return "Ми низкое"
    case 4:
      return "Ут"
    case 5:
      return "Ре"
    case 6:
      return "Ми"
    case 7:
      return "Фа"
    case 8:
      return "Соль"
    case 9:
      return "Ля"
    case 10:
      return "Фа высокое"
    case 11:
      return "Соль высокое"
    case 12:
      return "Ля высокое"
    default:
      return ""
  }
}

export const getLabel = (name) => {
  if (name.indexOf('dependency') !== -1) return 'Зависимость'
  if (name.indexOf('direction') !== -1) return 'Направление'
  if (name.indexOf('length') !== -1) return 'Длительность'
  if (name.indexOf('pitch') !== -1) return 'Высота'
  return ''
}

export const getOptions = (name) => {
  if (name.indexOf('dependency') !== -1) return [
    { value: 0, label: 'Нет' },
    { value: -1, label: 'От предыдущего' },
    { value: 1, label: 'От следующего' },
  ]

  if (name.indexOf('direction') !== -1) return [
    { value: 0, label: 'Равенство' },
    { value: -1, label: 'Вниз' },
    { value: 1, label: 'Вверх' },
  ]

  if (name.indexOf('length') !== -1) return [
    { value: 1, label: '1/8' },
    { value: 2, label: '1/4' },
    { value: 4, label: '1/2' },
    { value: 6, label: '3/4' },
    { value: 8, label: '4/4' },
  ]

  if (name.indexOf('pitch') !== -1) return [
    { value: 1, label: 'Ут низкое' },
    { value: 2, label: 'Ре низкое' },
    { value: 3, label: 'Ми низкое' },
    { value: 4, label: 'Ут' },
    { value: 5, label: 'Ре' },
    { value: 6, label: 'Ми' },
    { value: 7, label: 'Фа' },
    { value: 8, label: 'Соль' },
    { value: 9, label: 'Ля' },
    { value: 10, label: 'Фа высокое' },
    { value: 11, label: 'Соль высокое' },
    { value: 12, label: 'Ля высокое' },
  ]
  return ''
}
