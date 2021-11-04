const router = require('express').Router();
const t=require('../istest/t')
//TO DO: Change Gallery, Painting consts to whatever models we have in the models folder

const {User} = require('../models');




router.get('/api/recipe/:val', async (req, res) => {

    // localhost:3000/api/recipe/val
    console.log(req.params.val)
    //replace fries
    // const url= 'https://api.edamam.com/api/recipes/v2?type=public&q=fries&app_id=7f405668&app_key=eda4d42231735830901807b91c947c66'

    const queryUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${req.params.val}&app_id=7f405668&app_key=eda4d42231735830901807b91c947c66`

    //TO DO: need to hide api key and app id using .env
    let result = await axios.get(queryUrl)
    let recipeDig = result.data.hits

    res.json(recipeDig)
    .then(() => {
        
    })
     console.log(recipeDig)
}) 






router.get('/', async (req, res) => {

 try {


  const label=t.labels
  const images=t.images
  const url1= t.url1
  const diet2= t.diet2


    //const galleries = dbGalleryData.map((gallery) =>
     // gallery.get({ plain: true })
   // );
    
    res.render('homepage')
  } 
  catch (err) {
    console.log(err);
    res.status(500).json(err);
   }
});

// Get all keto recipes
router.get('/recipes/:id', async (req, res) => {
  try {
    const dbGalleryData = await Recipes.findByPk(req.params.id, {
      
    });
    []
    // Send over the 'loggedIn' session variable to the 'gallery' template
    res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one keto recipe 
router.get('/recipes/keto/:id', async (req, res) => {
  try {
    const dbGalleryData = await Recipes.findByPk(req.params.id, {
      
    });
    // Send over the 'loggedIn' session variable to the 'gallery' template
    res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});




module.exports = router;
