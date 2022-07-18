const { request } = require('express');
const express = require('express'); //npm i --save-dev express
const app = express();

app.get("/",(req,res,next)=> {
  console.log("first");
  next();
});

app.get("/",(req,res,next)=> {
  console.log("second");
  res.send('응답처리...');
  //return; //다음 미들웨어(third)를 태우지 않으려면 return으로 중지시킨다
  next();
});

app.get("/",(req,res,next)=> {
  console.log("third");
  next();
});



app.listen(3000);
