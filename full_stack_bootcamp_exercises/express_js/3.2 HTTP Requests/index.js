import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Steven F!')
})

app.get('/about-us', (req, res) => {
    res.send('This is me!')
})

app.get('/contact', (req, res) => {
    res.send("I won't tell you my address!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})