/* -- Functinal Js -- */

//Recursion

const countingBirthdays = (value,fn) => {
    fn(value)
    return (value > 0)?countingBirthdays(value-1,fn):value
}
countingBirthdays(3,value => console.log(`Happy ${value}º Birthday!!`));

const Mia = {
  type:'cat',
  data: {
    gender:'female',
    info:{
      age:8,
      fullname:{
        realname:'Candonga',
        shortname:'Mia'
      }
    }
  }
}
const findData = (fields,object={}) => {
  const [first,...remaining]= fields.split(".")
  return (remaining.length)?
    findData(remaining.join("."),object[first]):object[first]
}

console.log(findData("type",Mia));
console.log(findData("data.info.fullname.realname",Mia));

