const { default: axios } = require('axios');
const router = require('express').Router();
const User  = require('../../models/user');
//const db = require('../../istest/t')

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




router.post("/recipe", (req, res)=>{
    try{
        var queryUrl = constructURL(req.body);
        User.create({
                user_id: req.body.userId,
                item: req.body.foods.toString(),
            }).then((result) => {
                console.log(result);
            });

            axios.get(db,(err,res)=> {
                if (err) {console.log('error:', err);} // Print the error if one occurred
                 // Print the response status code if a response was received
                if (JSON.parse(body).count === 0){
                    res.send("No Recipes Found");
                }else{
                    res.status(200).json(body);
                }
            });
        }catch (err){
            res.send(err);
        }
    });

module.exports=router





// app.post('/search',async (req)=>{try{const query=constructURL(req.body) const resData = await axios.get(query,{
//         })
//         if(!resData){
//             console.log('you fucking suck')
//         }else{
//            const resBody = resData.body
//            res.status(200).json(resBody.hits)
//         }
//     }catch(err){
//     }
// })
//  $('search-button').on('click',
//         async(app)=>{
    // Grabs object passed and calls edamam api
    /*
     Object being passed will have property foods (required), calories, recipeCount, health
    */
// }
//  )