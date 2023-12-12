const VeiculoService = require('../services/veiculoService')
const veiculoService = new VeiculoService()

class VeiculoController {
    static async cadastrarVeiculo(req, res) {
        const { nome, marca, preco } = req.body
        
        try {
            const veiculo = await veiculoService.cadastrarVeiculo({ nome, marca, preco })
            
            res.status(201).json(veiculo)
            
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }
    
    static async buscarTodosVeiculos(req, res) {
        const veiculos = await veiculoService.buscarTodosVeiculos()
        
        res.status(200).json(veiculos)
    }
    
    static async buscarVeiculoPorId(req, res) {
        try {
            const { id } = req.params
            const veiculo = await veiculoService.buscarVeiculoPorId(id)
            
            res.status(200).json(veiculo) 
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }
    
    static async deletarVeiculoPorId(req, res) {
        const { id } = req.params
        
        try {
            await veiculoService.deletarVeiculoPorId(id)
            
            res.status(200).send({ message: 'Veiculo deletada com sucesso!' })
            
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }
    
    static async editarVeiculo(req, res) {
        const { id } = req.params
        const { nome, marca, preco } = req.body
        
        try {
            const veiculo = await veiculoService.editarVeiculo({ id, nome, marca, preco })
            
            res.status(200).json(veiculo)
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }
}

module.exports = VeiculoController