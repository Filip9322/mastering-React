//Array destructuring
let cities = ['Paris','Saint Petersburg', 'Moscow', 'Nice'];
[city1, , ,city4] = cities;

console.log(`i thought a lot in ${city4}`);

//Object Destructuring
var monuments = {paris:'Tour Eiffel',
                 stpeter:'Neva River',
                 moscow:'Red Square',
                 nice:'beach'
                }

var{paris,nice}= monuments;
paris = 'Versailles palace'

console.log('we should scape again to '+paris)

//incoming function destructuring
var tripGoals = {
  goal:'backflip'
}
var showGoal = ({goal}) => {
  console.log(`i got the goal of ${goal} during the travel`)
}
showGoal(tripGoals)

