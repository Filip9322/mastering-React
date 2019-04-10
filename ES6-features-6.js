/* -- Promise -- */
const getFakeJapanese = count = new Promise((resolves,rejects) =>{
  const api = `http://api.randomuser.me/?nat=JA&results=${count}`
  const request = new XMLHttpRequest()
    request.open('GET',api)
    request.onload = () =>
      (request.status === 200)?
      resolves(JSON.parse(request.response).results):
      reject(Error(request.statusText))
    request.onerror = (err) => rejects(err)
    request.send()
});

getFakeJapanese(3).then(members=>console.log(members),
                        err => console.error(new Error("cannot load members from randomuser"))
                       )
