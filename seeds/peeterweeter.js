
const fs=require('fs')
const express = require('express')
//const app = express()
const { default: axios } = require('axios');
// const { buffer } = require('stream/consumers');
async function  init(){

    const queryUrl='https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=pasta&app_id=7f405668&app_key=eda4d42231735830901807b91c947c66&imageSize=LARGE&random=true&field=label&field=image&field=url&field=dietLabels'

    const resData = await axios.get(queryUrl)
    
    const data2=resData.data.hits
    console.log(data2)
    const data = JSON.stringify(data2)

    console.log(data)

    fs.writeFile('recipeData.json',data, (err) => {
      if (err){
        console.log(err)
      }else{
        console.log('The file has been saved!');
      }
      
    });
    }
    
    module.exports=init
   
