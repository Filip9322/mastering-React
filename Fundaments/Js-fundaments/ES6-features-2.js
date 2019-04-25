class lifeDream {
  
  live = '<3' //Skip Constructor function call Es7
  
  printlifeDream = () => {
    console.log(`${this.live} I will not rest in peace until i`)
  }
}
class Job extends lifeDream{
 
  where = 'Japan'
  
  findJob = () => {
    console.log(this.printlifeDream(),`Find a job in ${this.where}`);
  }
}

let newjob = new Job ()

newjob.findJob()
