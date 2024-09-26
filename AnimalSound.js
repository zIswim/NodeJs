// 동물 소리 API 서버 만들기
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    if (name == 'dog'){
        res.json({'sound':'멍멍'})
    } else if (name == 'cat'){
        res.json({'sound':'야옹'})
    } else if (name == 'pig'){
        res.json({'sound':'꿀꿀'})
    } else{
        res.json({'sound':'알수없음'})
    }
    console.log(name)

    // res.send({'sound':name})
})

app.get('/cat', (req, res) => {
    res.send('<h1>고양이</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

