const User = require('./user');
const Recipe = require('./recipe');

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Recipe };