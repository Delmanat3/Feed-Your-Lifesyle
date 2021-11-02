const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userData = require('./userData.json');
const projectData = require('./recipeData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();

app.get('/search/', (req, res) => {
  const url= 'https://api.edamam.com/api/recipes/v2?type=public&q=fries&app_id=7f405668&app_key=eda4d42231735830901807b91c947c66'
          axios.get(url)
          .then(response => {
              console.log(response)
            if (!response.data.hints.length) {
              return res.send({
                error: 'No food found'
              })
            }else{
                  console.log('fuck') 
            }
         
            res.send(JSON.stringify(response.data.hints))
          })
          .catch(error => res.sendStatus(error.response.status))
      })