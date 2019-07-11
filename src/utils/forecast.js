const request = require('request')



const forecast =(latitude,longitude,callback)=>{
  const url ='https://api.darksky.net/forecast/42b67f429c64f25877ec780825adf9ca/'+ latitude + ',' + longitude;

  request({url,json:true},(error,{body})=>{
    if(error) {
      callback('unable to connect weather services',undefined);
    } else if(body.error) {
      callback('unable to find location',undefined);
    } else {
      callback(undefined,body.daily.data[0].summary + 'It is currently' + body.currently.temperature +' degree out. There is a  ' + body.currently.precipProbability +' % chance of rain');
    }
  })
}

module.exports = forecast
