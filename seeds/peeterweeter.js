
const fs=require('fs')
const express = require('express')
const app = express()
const { default: axios } = require('axios');
const { buffer } = require('stream/consumers');
fs.writeFile
async function  init(){

    const queryUrl='https://api.edamam.com/api/recipes/v2?type=public&q=fries&app_id=7f405668&app_key=eda4d42231735830901807b91c947c66'
    const resData = await axios.get(queryUrl)
    
    const data2=resData.data.hits
    console.log(data2)
    const data = JSON.stringify(data2)

    console.log(data)

    fs.writeFileSync('recipeData.json',data, (err) => {
      if (err){
        console.log(err)
      }else{
        console.log('The file has been saved!');
      }
      
    });
    }
    init()
   'https://api.edamam.com/api/recipes/v2?type=public&
   &app_id=7f405668&app_key=eda4d42231735830901807b91c947c66'
