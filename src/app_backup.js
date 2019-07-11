const path =require('path');
const express = require('express');


const app = express();



const publicDirectoryPath = path.join(__dirname,'../public');

app.set('view engin','hbs');

app.use(express.static(publicDirectoryPath));

app.get('',(req,res)=>{
  res.render('index', {
    title:'Weather App',
    name:'Preeti Gupta'
  })
})


app.get('/about',(req,res)=>{
    res.render(about,{
      title:'About Me',
      name:'Preeti Gupta'

    })
})

app.get('/help',(req,res)=>{
  res.render('help',{
    helpText:'This is some helpful text'
  })
})

app.get('/weather',(req,res)=>{
  res.send({
    forecast:'It is snowing',
    location:'India'
  });
})
app.listen(3000,()=>{
  console.log('server is running!!');
})
