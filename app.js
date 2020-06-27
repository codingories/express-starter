const express = require('express')
const logger = require('./logger')
const app = express()


app.use(logger('dev'))
app.use((request, response, next)=>{
  response.write("1")
  next()
})
app.use((request, response, next)=>{
  response.write("2")
  if(true){ // 如果有错误会进入带error的回调
    next("not login")
  } else {
    next()
  }
})

app.use((error, request, response, next)=>{
  response.write(error)
  response.end()
  next()
})

app.use((request, response, next)=>{
  response.write("3")
})

app.listen(3000, () => {
  console.log('正在 listen 3000')
})
