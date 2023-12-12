const { Router } = require('express')
const VeiculoController = require('../controllers/veiculoController')

const router = Router()

router
  .post('/veiculo', VeiculoController.cadastrarVeiculo)
  .get('/veiculo', VeiculoController.buscarTodosVeiculos)
  .get('/veiculo/id/:id', VeiculoController.buscarVeiculoPorId)
  .delete('/veiculo/id/:id', VeiculoController.deletarVeiculoPorId)
  .put('/veiculo/id/:id', VeiculoController.editarVeiculo)

module.exports = router