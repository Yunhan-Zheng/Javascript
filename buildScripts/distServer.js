import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression'

/* eslint-disable no-console*/
const port = 3000;
const app = express();

//enable Gzip compression in express
app.use(compression());

//serve static files in the dist directory
app.use(express.static('dist'));

//any reference to the root should be handled by the funtion
//declare routing
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

//an end point that returns data
app.get('/users', function(req,res){
  //hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id":1, "firstName":"Jim", "lastName":"Smith", "email":"jimSmith@gmail.com"},
    {"id":2, "firstName":"John", "lastName":"Hood","email":"johnHood@gmail.com"},
    {"id":3, "firstName":"Lily","lastName":"White","email":"lilyWhite@gmail.com"}
  ]);
});

app.listen(port, function(err){
  if (err){
    console.log(err);
  }else{
    open('http://localhost:'+port);
  }
});