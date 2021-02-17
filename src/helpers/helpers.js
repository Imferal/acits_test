// Поиск значения атрибута (рост, вес... можно расширять)
// среди характеристик животного
export const findAnimalAttr = (attrs, attr) => {
  return attrs.find(item => item.name === attr) === undefined ? null :
    attrs.find(item => item.name === attr).value
}

// перевод даты рождения в возраст
export const birthDateToAge = (birthDate) => {
  if (birthDate === null) return
  birthDate = new Date(birthDate);
  let now = new Date(),
    age = now.getFullYear() - birthDate.getFullYear();
  age = now.setFullYear(1972) < birthDate.setFullYear(1972) ? age - 1 : age;
  age = calculateAge(age)
  return age
}

// Склонение слова "год"
function calculateAge(number) {
  let words = ['год', 'года', 'лет']
  let word = words[(number % 100 > 4 && number % 100 < 20) ?
    2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
  return number + ' ' + word
}