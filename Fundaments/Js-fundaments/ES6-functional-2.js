/* -- Functinal Js -- */

//Imperative mode
var unString = "omae wa mou shindeiru"
var unUrlFriendly = ""

for(let i=0 ; i< unString.length ; i++){
  if(unString[i]===" "){
    unUrlFriendly += "-"
  }else{
    unUrlFriendly += unString[i]
  }
}
console.log(unUrlFriendly)

//Declarative mode
const string = "omae wa mou shindeiru"
const urlFriendly = string.replace(/ /g, "-")

console.log(urlFriendly)
