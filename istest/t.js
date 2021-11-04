
const fs= require('fs');
const express = require('express')
const app = express()

const labels=[];
const images=[];
const url1=[];
const diet2=[];

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
//start()
    
module.exports={
  labels,
  images,
  url1,
  diet2
}



/**  <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">Search
          by Diet</a>
        <div class="dropdown-menu">
          {{!-- req.session.user_id ish --}}

          {{!-- Added class for valdrop js to use --}}
          <a id="opt1" data-value="balanced" class="dropdown-item dropdown-option" href="#">Balanced</a>
          <a data-value="high-protein" class="dropdown-item dropdown-option" href="#">High-Protein</a>
          <a data-value="low-carb" class="dropdown-item dropdown-option" href="#">Low Carb</a>
          <a data-value="low-fat" class="dropdown-item dropdown-option" href="#">Low-Fat</a>
          <a data-value="low-sodium" class="dropdown-item dropdown-option" href="#">Low-Sodium</a>
        </div>
      </li> */
// const { fs } = require('fs');

// fs.readFile(db, 'utf8', function (err, data) {
//     if (err) throw err;
//     console.log(data);
// });