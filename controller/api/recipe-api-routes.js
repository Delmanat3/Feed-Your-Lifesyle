const { default: axios } = require('axios');
const router = require('express').Router();
const User = require('../../models/user');
const db = require('../../istest/t')

const labels = db.labels
const images = db.images
const url1 = db.url1
const diet2 = db.diet2

// &health=

// ******DONE: fix url so it grabs the data value from the dropdown
// TO DO : This all should go in home routes
// TO DO: take the result1 that's now an array of recipes per user search and render it onto the handlebars page -- do using an if statement in handlebars.
//could make global var in valdrop as empty string and then check whether it's true or not and if true then the recipes could be rendered.

router.get('/:val', async (req, res) => {

    // localhost:3000/api/recipe/val
    console.log(req.params.val)
    // const url= 'https://api.edamam.com/api/recipes/v2?type=public&q=fries&app_id=7f405668&app_key=eda4d42231735830901807b91c947c66'

    //replace fries
    const queryUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${req.params.val}&app_id=7f405668&app_key=eda4d42231735830901807b91c947c66`

    //TO DO: need to hide api key and app id using .env
    let result = await axios.get(queryUrl)
    let result1 = result.data.hits

    res.json(result1)
    .then(() => {
        
    })
    // console.log(result1)
})

//result1 is populated with an array of recipes based on what they click in dropdown.  


router.post("/", async (req, res) => {
    try {
        const quer = req.body;
        const dbQuery = JSON.parse(quer.foods)
        for (let i = 0; i < dbQuery.length; i++) {
            const recData = dbQuery[i].recipe
        }
        console.log(recData)
        //req.session.?//id userid 
        User.create({
            user_id: req.body.userId,
            item: req.body.foods.toString(),
        }).then((result) => {

            console.log(result);
        });

        axios.get(db, (err, resp) => {
            if (err) { console.log('error:', err); } // Print the error if one occurred
            // Print the response status code if a response was received
            if (JSON.parse(body).count === 0) {
                res.send("No Recipes Found");
            } else {
                res.status(200).json(body);
            }
        });
    } catch (err) {
        res.send(err);
    }
});

module.exports = router





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