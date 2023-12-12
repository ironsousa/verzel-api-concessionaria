'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class veiculos extends Model {
    static associate(models) {
      
    }
  }
  veiculos.init({
    nome: DataTypes.STRING,
    marca: DataTypes.STRING,
    preco: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'veiculos',
  })
  return veiculos
}