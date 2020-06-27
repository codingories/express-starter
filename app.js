const express = require('express')
const logger =require('./logger')
const app = express()



app.use(logger('dev'))

app.use((request, response, next)=>{
  if (request.path === '/' && request.method === "get" ){
    response.send('根目录')
  }
  next()
})

app.use((request, response, next)=>{
  if (request.path === '/aaa'){
    response.send('这是 aaa')
  }
  next()
})

app.use((request, response, next)=>{
  if (request.path === '/bbb'){
    response.send('这是 bbb')
  }
  next()
})

app.listen(3000, () => {
  console.log('正在 listen 3000')
})
