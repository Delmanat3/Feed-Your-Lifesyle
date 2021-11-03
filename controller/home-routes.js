const router = require('express').Router();
// const food = require("../assets");

//TO DO: Change Gallery, Painting consts to whatever models we have in the models folder
const { Gallery, Painting } = require('../models');

//Homepage display...Do we show all diet types on home page as clickable cards? 
//Example: user could click the keto card to display all keto recipes.
router.get('/', async (req, res) => {
  // try {
  //   const dbGalleryData = await Gallery.findAll({
  //     include: [
  //       {
  //         model: Painting,
  //         attributes: ['filename', 'description'],
  //       },
  //     ],
  //   });

  //   const galleries = dbGalleryData.map((gallery) =>
  //     gallery.get({ plain: true })
  //   );

    res.render('homepage')
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json(err);
  // }
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
