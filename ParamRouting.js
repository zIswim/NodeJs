// express 실습
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {
    // const q = req.params
    // console.log(q)
    const q = req.query
    console.log(q.q)
    console.log(q.name)

    // res.json({'userid':q.id})
    res.json({'userid':q.name})
})

app.get('/cat', (req, res) => {
    res.send('<h1>고양이</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

