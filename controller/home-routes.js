const router = require('express').Router();
const t=require('../istest/t')
const { default: axios } = require('axios');

//TO DO: Change Gallery, Painting consts to whatever models we have in the models folder

const {User} = require('../models');


router.get('/', async (req, res) => {

 try {
    res.render('homepage', {logged_in: req.session.logged_in})
  } 
  catch (err) {
    console.log(err);
    res.status(500).json(err);
   }
});



router.get('/recipe/', async (req, res) => {
  // const queryUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${req.params.val}&app_id=7f405668&app_key=eda4d42231735830901807b91c947c66`

  //TO DO: need to hide api key and app id using .env
  try{
     res.render('recipe', {logged_in: req.session.logged_in})
  }catch(err){
      console.log(err)
      return
  }
 
});

// // Get all keto recipes
// router.get('/', async (req, res) => {
//   try {
//    // const dbGalleryData = await Recipes.findByPk(req.params.id, {
      
//    // });
//     //[]
//     // Send over the 'loggedIn' session variable to the 'gallery' template
//     res.render('recipe', {logged_in: req.session.logged_in });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });


// // GET one keto recipe 
// router.get('/recipe/keto/:id', async (req, res) => {
//   try {
//     const dbGalleryData = await Recipes.findByPk(req.params.id, {
      
//     });
//     // Send over the 'loggedIn' session variable to the 'gallery' template
//     res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }
  // Otherwise, render the 'login' template
  res.render('login');
});




module.exports = router;
