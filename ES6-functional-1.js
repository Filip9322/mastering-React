/* -- Functinal Js -- */

//functions can do the same things than variables
const log = message => console.log(message)
log('nanai')

//functions can be sent to others functions
const angerLog = times => times("what are you gonna do?")
angerLog(message => console.log(message))

//functions can return from functions
const createScream = logger => message =>
      logger(message.toUpperCase()+'!!!')
const scream = createScream(message => console.log(message))

scream('impressed ?')
