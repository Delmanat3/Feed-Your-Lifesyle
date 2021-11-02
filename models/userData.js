// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class UserData extends Model {
  
//   }

// UserData.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     savedRecipes: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       unique: true,
//       references: {
//         model: 'recipe',
//         key: 'id',
//     },
//     },
//     userData_id: {
//         type: DataTypes.INTEGER,
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
//     modelName: 'userData',
//   }
// );

// module.exports = UserData;