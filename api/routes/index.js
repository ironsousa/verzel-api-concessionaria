const bodyParser = require('body-parser')
 
const veiculo = require('./veiculoRoute')
const usuario = require('./usuariosRoute')

module.exports = app => {
  app.use(
    bodyParser.json(),
    veiculo,
    usuario
  )
}
