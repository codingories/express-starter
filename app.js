const express = require('express')

const app = express()

app.use((request, response, next) => {
  console.log(request.url)
  response.write('hi')
  next() // next表示当前的功能已经完成了，进入下一个功能,send只能发一次
})

app.use((request, response, next) => {
  console.log(2)
  response.write('hello')
  next()
})

app.use((request, response, next) => {
  console.log(3)
  response.end()
  next()
})


app.listen(3000, () => {
  console.log('正在 listen 3000')
})
