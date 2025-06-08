require('dotenv').config()
const express   = require('express')
const bodyParser= require('body-parser')
const { Client }= require('@notionhq/client')
const path = require("path");

const app   = express()


// 정적 파일 서빙
app.use(express.static('public'))

// body-parser 설정
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

// 서버 실행
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})
