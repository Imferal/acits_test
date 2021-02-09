// Поиск значения атрибута (рост, вес... можно расширять)
// среди характеристик животного
export const findAnimalAttr = (attrs, attr) => {
    return attrs.find(item => item.name === attr) === undefined ? null :
        attrs.find(item => item.name === attr).value
}