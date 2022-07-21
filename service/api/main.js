const express = require('express')
const bodyParser = require('body-parser')
const uuid = require('uuid')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const cooperationDb = new Map()
const agreementDb = new Map()
let counter = 0

app.post('/cooperation', (req, res, next) => {
  const formData = req.body
  console.log(`POST /cooperation`, {formData})
  const code = uuid.v4()
  cooperationDb.set(code, formData)

  return res.redirect(303, `http://localhost:4200/agreement?cooperationCode=${code}`)
})

app.get('/cooperation/:code', (req, res) => {
  const code = req.params.code
  console.log(`POST /cooperation`, {code})

  const cooperationNotice = cooperationDb.get(code)
  console.log(`response notice`, {cooperationNotice})

  return res.json(cooperationNotice)
})

app.get('/agreement', (req, res) => {
  return res.json(Array.from(agreementDb.values()))
})

app.post('/agreement/', (req, res) => {
  const agreement = req.body
  console.log(`POST /agreement`, {agreement})

  const code = counter++
  agreement.code = code
  agreementDb.set(code, agreement)
  return res.json({result: 'success'})
})

app.listen(port, () => console.log(`Listening on  http://localhost:${port}`))
