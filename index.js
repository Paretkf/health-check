const express = require('express')
const bodyParser = require('body-parser')
const consola = require('consola')
const app = express()

function makeid(length) {
  var result  = ''
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
const serverId = makeid(8)
async function start () {
  const startDate = new Date()
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  app.get('/', (req, res) => {
    const endDate = new Date()
    res.send({
      status: 'OK!',
      uptime: endDate - startDate,
      server_id: serverId
    })
  })

  app.listen(3000)
  consola.ready({
    message: `Server listening on http://localhost:3000`,
    badge: true
  })
}
start()
