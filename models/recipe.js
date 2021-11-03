const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//DataTypes.ARRAY(/* DataTypes.SOMETHING */)  // Defines an array of DataTypes.SOMETHING. 
//PostgreSQL only.

class Recipe extends Model {
  
  }

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    label: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    image: {
        type: DataTypes.STRING,
    },

    user_id: {
        type: DataTypes.STRING,
        references: {
            model: 'user',
            key: 'id',
        },
    },

  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe',
  }
);

//turn entire db obj into string

module.exports = Recipe;