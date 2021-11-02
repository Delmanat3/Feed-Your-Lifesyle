// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Recipe extends Model {
  
//   }

// Recipe.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     // hits: {
//     //   type: DataTypes.INTEGER,
//     //   allowNull: false,
//     //   unique: true,
//     //   references: {
//     //     model: 'recipe',
//     //     key: 'id',
//     //     },
//     // },
//     image: {
//         type: DataTypes.STRING,
//     },
//     diet: {
//         type: DataTypes.STRING,
//     },
//     health: {
//         type: DataTypes.STRING,
//     },
//     recipe: {
//         type: DataTypes.STRING,
//     },
//     likes: {
//         type: DataTypes.ARRAY(DataTypes.INTEGER),
//         references: {
//             model: 'user',
//             key: 'id',
//         },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'recipe',
//   }
// );

// module.exports = Recipe;