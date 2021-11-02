
// const url= 'https://api.edamam.com/api/recipes/v2?type=public&q=fries&app_id=7f405668&app_key=eda4d42231735830901807b91c947c66'

// const response=fetch(url,{
//     method:'GET',
//     headers: { 'Content-Type': 'application/json' }
// }).then(
//     function(response1){
//       console.log(response1)
//     }
   
// )
const fs=require('fs')
const express = require('express')
const app = express()
const { default: axios } = require('axios');
//const { buffer } = require('stream/consumers');

//const axios = require('axios')

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

async function  init(){
const queryUrl='https://api.edamam.com/api/recipes/v2?type=public&q=fries&app_id=7f405668&app_key=eda4d42231735830901807b91c947c66'
const resData = await axios.get(queryUrl)

const data2=resData.data.hits
console.log(data2)
const data = data2.toString()
console.log(data)
fs.writeFile('recipe.json',data, (err) => {
  if (err){
    console.log(err)
  }else{
    console.log('The file has been saved!');
  }
  
});
}
// const data = new Uint8Array(Buffer.from(resData));
// writeFile('recipe.json', data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });


  
  
  
init()