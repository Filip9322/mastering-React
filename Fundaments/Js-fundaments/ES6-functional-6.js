/* -- Functinal Js -- */

//High Order Functions

const truthOrDare = (condition,fnTrue,fnFalse) => (condition)?fnTrue():fnFalse()
const truth = () => console.log("Have you burned the the dinner?")
const dare  = () => console.log("Eat a raw egg")

truthOrDare(true,truth,dare)
truthOrDare(false,truth,dare)


//Map & sets

const listDogNames = new Set()
listDogNames.add('Candonga')
listDogNames.add('Pooh')
listDogNames.add('Tejon de Miel')
console.log('Does it have Pooh: '+listDogNames.has('Pooh'))

const japanCities  = new Map()
japanCities.set('country','Japan')
japanCities.set('prefefacture','Hokkaido')
japanCities.set('city','Sapporo')
console.log(japanCities.get('prefefacture'))
