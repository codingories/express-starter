const express = require('express')
const logger = require('./logger')
const app = express()


app.use(logger('dev'))

app.use((request, response, next) => {
  if (request.path === '/' && request.method === "get") {
    response.send('根目录')
  }
  next()
})

app.get('/xxx', (request, response, next) => {
  response.send('xxx 页面')
  next()
})

app.route('/xxxx')
  // .all(() => {console.log('ffff')})
  .get((request, response, next) => {
    console.log('ttttta')
    response.send('xxxx')
    response.end()
    next()
  })


app.listen(3000, () => {
  console.log('正在 listen 3000')
})
