/* -- Functinal Js -- */

// Functional array.map
const typeSchool = ['小学校','中学校','高校','大学']
const hiratypeSchool = ['しょうがっこう','ちゅうがっこう','こうこう','だいがく']

const studentsSchools = typeSchool.map(school => `${school}生たち`)
const objectSchools   = Object.assign(...typeSchool.map((school,i)=>({
    kanji:school,
    hiragana:hiratypeSchool[i]
})))

console.log(typeSchool.join(','))
console.log(studentsSchools.join(','))
console.log(objectSchools)

// reduce

const ages =[20,25,22,10,26,24]

const maxAge = ages.reduce((max,value)=>(value>max)?value:max,0)

const colors = ['赤','青','赤','白','緑','緑']

const uniqueColors = colors.reduce(
  (distinct,color) ==> 
      (distinct.indexOf(color)!== -1)? distinct: [...distinct,color], []
)

console.log('Max Age: '+maxAge)
console.log(uniqueColors)
