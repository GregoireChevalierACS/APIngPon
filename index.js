const express = require('express')
const app = express()
const port = 2102

app.get('/', (req, res) => {
  res.send('APIngpong !')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

