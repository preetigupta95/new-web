const express = require('express');
const geocode = require('./utils/geocode');
const forecast =require('./utils/forecast');
const path = require('path');
const Mathfun = require('./callbackExample')
const app = express();
const port = process.env.PORT || 3000;
Mathfun.divide(1, 0, (err, result)=>{
          if(err) {
              console.log(err);
          } else {
            console.log('Result is',+ result);
          }
});

publicDirectoryPath = path.join(__dirname,'../public');

app.use(express.static(publicDirectoryPath));
app.get('/about',(req,res)=>{
    res.send('About page');
})
-
app.get('/products',(req,res)=>{
  if(!req.query.search) {
   return  res.send({
      error:'You must provide a search term'
    })
  }
  res.send({
    products:[]
  })
})

app.get('/weather',(req,res)=>{
  if(!req.query.address){
    return res.send({
      error:'You must provide an address'
    })
  }
  else {
    geocode(req.query.address,(error,{latitude,longitude,location}={})=> {
      if(error) {
        return res.send({error})

      }

        forecast(latitude, longitude, (error, forecastData) => {
          if(error) {
            return res.send(error);
          }
          res.send({
            forecast:forecastData,
            location,
            address:req.query.address
          })


            })
    })
  }
})

app.listen(port,()=>{
  console.log('server is running!!' + port);
})
