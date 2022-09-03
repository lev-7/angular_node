const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS");
  next();
});

app.post("/api/posts",(req,res,next)=>{
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
})

// app.use((req,res, next)=>{
//   console.log("First middleware");
//   next(); // if you are not sending a response
// });



app.use('/api/posts',(req,res,next)=>{ // http://localhost:3000/api/posts
  const posts = [
    {
      id: '3489798556',
      title: 'First Post',
      content: 'First Post Content'
    },
    {
      id: '1657543465',
      title: 'Second Post',
      content: 'Second Post Content'
    },
    {
      id: '7916517615',
      title: 'Third Post',
      content: 'Third Post Content'
    }
  ]

  res.status(200).json({
    message: 'posts fetched successfully',
    posts: posts
  });
});

module.exports = app;
