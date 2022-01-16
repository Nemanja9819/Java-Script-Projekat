'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hrana extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  };

  Hrana.init({
    ime: DataTypes.STRING,
    sastojci: DataTypes.STRING,
    cena: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Hrana',
  });
  return Hrana;
};