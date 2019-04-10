
var defaultPerson = {
  name: {
    first: "Filip"
  },
  thoughs: {
    love : "Miyo <3"
  }
}

function logActivity(p = defaultPerson){
  console.log( `${p.name.first} still wants the best for ${p.thoughs.love}`);
}

var greetings = (p,type) => {
  
  if(!p){
    p= defaultPerson
  }
  if(!type){
    throw new Error(`Find a way to feel her close `)
  }
  
  return`${p.name.first} salute with a ${type} to ${p.thoughs.love}`
 }

console.log(greetings(null,null))
