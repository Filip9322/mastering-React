/* -- Functinal Js -- */

// Inmutability
let type_smile = {
  person: 'dream_girl',
  lips_color: 'pink',
  rgb_lips: 'c98276',
  smile_size: 'huge'
}

var changeLipsColor = function(person,rgbcolor){
  return Object.assign({},person,{rgb_lips:rgbcolor})
}

const changeLipsColorUlt = (person,rgbcolor) => ({
  ...person,rgb_lips:rgbcolor
})

console.log(changeLipsColor(type_smile,'d09388').rgb_lips)
console.log(changeLipsColorUlt(type_smile,'bb6151').rgb_lips)
console.log(type_smile.rgb_lips)
