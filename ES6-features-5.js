/* Object Literal enhacement */
var petName = "Mia"
var petType = "Cat 猫"

var printPet = () => {console.log(`${petName} is a ${petType}`)}

var mypet = {
      petName,
      petType,
      printPet,
      printMeows(times){
        let meows = ''
        for(let i = 0 ; i < times; i++){
          meows += "Meow! "
        }
        return meows;
      }
    }

mypet.printPet()
console.log(mypet.printMeows(10))
