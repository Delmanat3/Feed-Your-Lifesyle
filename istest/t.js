
const fs= require('fs');
const express = require('express')
const app = express()

const labels=[];
const images=[];
const url1=[];
const diet2=[]

 const start = async ()=>{

   try{
     
    const db=fs.readFileSync('./recipe.json', 'utf8') 
    const data = await JSON.parse(db) 

    for (let i = 0; i < data.length; i++) {
        const recData = data[i].recipe
        
        let label=recData['label'];
        let image=recData['image'];
        let url=recData['url'];
        let diet=recData['dietLabels']

        let dietLabels=diet.toString()
        diet2.push(dietLabels)
        labels.push(label)
        images.push(image)
        url1.push(url)
    }
  console.log(diet2)
console.log(labels)
console.log(images)
console.log(url1)
     
     
   }catch(err){console.log(err)}

}
start()
    
module.exports={
  labels,
  images,
  url1,
  diet2
}




// const { fs } = require('fs');

// fs.readFile(db, 'utf8', function (err, data) {
//     if (err) throw err;
//     console.log(data);
// });