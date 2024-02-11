const express = require('express')
const cors = require('cors')
const app = express()

const port = 9090

app.use(cors())
app.use(express.urlencoded())
app.use(express.json())

function checkFields(obj) {
  const wrongFields = {}
  for (const key in obj) {
    if (!obj[key]) {
      wrongFields[key] = `Check ${key.toLowerCase()} field`
    }
  }
  return wrongFields
}

app.post('/api/registration', (req, res) => {
  if (Object.keys(checkFields(req.body)).length) {
    res.statusCode = 400

    setTimeout(() => {
      res.send({
        status: 'error',
        fields: checkFields(req.body),
      })
    }, Math.random() * 1000)

    return
  }

  setTimeout(() => {
    res.statusCode = 200
    res.send({
      status: 'success',
      message: 'You are registered',
    })
  }, Math.random() * 1000)
})

app.get('/api/ping', (req, res) => {
  res.statusCode = 200
  res.send({
    status: 'success',
    message: 'Server is ready',
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
