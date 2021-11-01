
var db = require("../models");



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
        if (data.calories){
            var calories = parseInt(data.calories);
            if(calories){
                queryURL += "&calories=";
                queryURL += "lte " + calories;
            }else{
                throw "calorie needs to be an integer";
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
        throw "foods property is required"
    }

}


module.exports = function(app){
    // Grabs object passed and calls edamam api
    /* Object being passed will have property foods (required), calories, recipeCount, health
    */
    app.post("/api/recipesearch", async(req, res)=>{
        try{
          const reqD=constructURL(req.body){
              
          }
            const resData=await axios.get(reqD,)
            fetch(queryUrl, function (error, response, body) {
                if (error) {console.log('error:', error);} // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                if (JSON.parse(body).count === 0){
                    res.send("No Recipes Found");
                }else{
                    res.send(JSON.parse(body).hits);
                }
            });
        }catch (err){
            res.send(err);
        }
    });

}