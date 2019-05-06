/* -- Functinal Js -- */

// Pure Functions

//---- Example impure function ----
const asshenta = {
  name: 'asshenta',
  canDance: false,
  canClimb: false
}

const selfRiskEducation = (person) => {
  person.canDance = true
  person.canClimb = true
  return person
}

console.log(selfRiskEducation(asshenta))
console.log(asshenta)

//---- Pure Function ----
const slaventa = {
  name: 'slaventa',
  canDance: false,
  canClimb: false
}

const selfRiskRussianEducation = person => ({
  ...person,
  canDance:true,
  canClimb:true
})

console.log(selfRiskRussianEducation(slaventa))
console.log(slaventa)

