const { default: axios } = require('axios');
const router = require('express').Router();
const User  = require('../../models/user');
const db = require('../../istest/t');




router.get('/:val', async (req, res) => {

    const queryUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${req.params.val}&app_id=7f405668&app_key=eda4d42231735830901807b91c947c66`

    //TO DO: need to hide api key and app id using .env
    try{
        const result = await axios.get(queryUrl)
        let result1 = result.data.hits
        res.json(result1)
        
    }catch(err){
        console.log(err)
        return
    }
})

module.exports = router