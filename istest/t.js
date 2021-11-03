
const fs= require('fs');
const express = require('express')
const app = express()

 async function start(){
   try{
    let labels=[];
    let images=[];
    let url1=[];
    let diet2=[]
    
    const db=fs.readFileSync('../seeds/recipeData.json', 'utf8') 

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
     
     
   }catch(err){console.log(err)
   }

}
    
module.exports=start()



// const { fs } = require('fs');

// fs.readFile(db, 'utf8', function (err, data) {
//     if (err) throw err;
//     console.log(data);
// });