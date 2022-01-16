'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stolovi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Stolovi.init({
    stolice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stolovi',
  });
  return Stolovi;
};