const express = require('express')
const app = express()
const axios = require('axios')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
 
    app.get('/foods/:name', (req, res) => {
    const url = `https://api.edamam.com/api/food-database/parser?app_id=adc6f730&app_key=1c36192c8df25e1cdb4a6f66853b9236&ingr=${req.params.name}`
    axios.get(url)
      .then(response => {
        if (!response.data.hints.length) {
          return res.send({
            error: 'No food found'
          })
        }
        res.send(JSON.stringify(response.data.hints))
      })
      .catch(error => res.sendStatus(error.response.status))
  })
  /*{
    "items": [
        {
            "sugar_g": 207.4,
            "fiber_g": 107.0,
            "serving_size_g": 4535.92,
            "sodium_mg": 45,
            "name": "corn",
            "potassium_mg": 3442,
            "fat_saturated_g": 8.8,
            "fat_total_g": 69.4,
            "calories": 4257.4,
            "cholesterol_mg": 0,
            "protein_g": 153.1,
            "carbohydrates_total_g": 950.9
        }
    ]
} */
module.exports=testing