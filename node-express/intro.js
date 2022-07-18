//import express from "express";
// 아래에서 require를 사용하려면 package.json에 type:module이 아니라 commonjs로 변경
const express = require('express'); //npm i --save-dev express

const app = express();

app.get("/",(req,res)=> {
  console.log("get");
  res.send("안녕하세요. 서버의 <font color=red>응답</font>입니다.");
});
app.listen(3000);

