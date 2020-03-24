const express = require('express')
const serverless = require('serverless-http')

const app = express()

app.get('/.netlify/functions/app', (req, res) => {
  res.send('It works!')
})

module.exports = app
module.exports.handler = serverless(app)