const fruits = ['apple','orange']
const moreFruits = [...fruits, 'strawberry']
const likes = {
  drink: 'wine'
};
const food = {
  ...likes,food: 'meat'
}
let person = (...args) => {
  return `She likes the ${args[0]}, drink ${args[1]['drink']} and eat ${args[1]['food']}`
}
console.log('0.own example',person(moreFruits,food))

//Book example with some of destructuring

// same fruits array without spreap operator, take in mind that i modified a const :O
const fruits1 = ['apple','orange']
var [lastFruit] = fruits1.reverse()
console.log('1.modify original array',lastFruit)
console.log(fruits1.join(','))

//same fruits with spread operator
var [ilastFruit]= [...fruits].reverse()
console.log('2.not modified original array',ilastFruit)
console.log(fruits.join(','))











