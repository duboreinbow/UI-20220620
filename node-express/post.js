const express = require('express');
const app = express()
app.use(express.json())
app.post("/kh/:id", (req,res) => {
  //nodejs로부터 요청객체와 응답 객체는 주입 받음
  console.log(req.body);
});

app.listen(3000);

/*
  http://localhost:3000/kh/tomato -> id값은 tomato
  http://localhost:3000/kh/tomato?mem_id=apple&mem_pw=123
*/