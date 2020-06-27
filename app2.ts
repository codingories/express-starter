import express from "express";

const app = express();

app.get('/', function (request, response) {
  response.send('你好');
});


app.post('./',(request, response, next)=>{})

const port = 4000;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

