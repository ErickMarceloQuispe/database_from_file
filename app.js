const express = require('express')
const app = express()
const port = 5000

app.set("view engine","ejs");

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})