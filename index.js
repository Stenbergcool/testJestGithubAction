const express = require('express')
const app = express()
const port = 3000
const locationReturner = require('./modul')
app.get('/', (req, res) => {
  res.json(locationReturner())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
