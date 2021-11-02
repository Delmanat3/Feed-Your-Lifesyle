const { default: axios } = require('axios');
const router = require('express').Router();
const  User  = require('../../models/user');

router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });
// Diet label: one of “balanced”, “high-protein”, “high-fiber”, “low-fat”, “low-carb”, “low-sodium”
// Maximum number of ingredients. Example: ingr=5
// “health=peanut-free&health=tree-nut-free”
// cuisineType=chinese&cuisineType=indian”
// “dishType=soup&dishType=dessert”
// “calories=100-300” will return all recipes with which have between 100 and 300 kcal per serving.
// function to construct URL passed for API

function constructURL(data){
    if (data.foods){
       const queryURL= "https://api.edamam.com/api/recipes/v2?type=public&app_id=7f405668&app_key=eda4d42231735830901807b91c947c66&q="
        var foods = data.foods.toString();
        queryURL += foods;
        if (data.diet){
            //var diet1 = parseInt(data.diet);
            if(data.diet){
                queryURL += "&diet=";
                queryURL +=  diet;
            }else{
                throw "diet type";
            }
        }
        if (data.health){
            if (typeof data.health !== "string"){
                throw "health needs to be a String";
            }else{
                queryURL += "&health=";
                queryURL += data.health;
            }
        }

        if (data.recipeCount){
            var recipeCount = parseInt(data.recipeCount);
            if (recipeCount){
                queryURL += "&to=";
                queryURL += recipeCount;
            }else{
                throw "recipeCount needs to be an integer";
            }
        }
    return queryURL;
    }else{
        throw"foods property is required"}
}


     router.post("/search", (req, res)=>{
        try{
            var queryUrl = constructURL(req.body);
            db.Recipe.create({
                user_id: req.body.userId,
                item: req.body.foods.toString(),}).then((result) => {console.log(result);});
            axios.get(queryUrl,(error, response, body)=> {
                if (error) {console.log('error:', error);} // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
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