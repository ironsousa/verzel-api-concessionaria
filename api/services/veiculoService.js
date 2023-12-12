const { v4: uuidv4 } = require('uuid')
const database = require('../models')

class VeiculoService {
    async cadastrarVeiculo(dto) {
        const veiculo = await database.veiculos.findOne({
            where: {
                nome: dto.nome
            }
        });

        if (veiculo) {
            throw new Error('Veiculo já cadastrado');
        }

        try {
            const newVeiculo = await database.veiculos.create({ 
                id: uuidv4(),
                nome: dto.nome,
                marca: dto.marca,
                preco: dto.preco
            });

            return newVeiculo;
        } catch (error) {
            console.error('Message error: ', error.message);
            throw error;
        }
    }

    async buscarTodosVeiculos() {
        const veiculos = await database.veiculos.findAll()

        return veiculos;
    }

    async buscarVeiculoPorId(id) {
        const veiculo = await database.veiculos.findOne({
            where: {
                id: id
            }
        });

        if (!veiculo) {
            throw new Error('Veiculo informado não cadastrado!')
        }

        return veiculo;
    }

    async deletarVeiculoPorId(id) {
        const veiculo = await database.veiculos.findOne({
            where: {
                id: id
            }
        });

        if (!veiculo) {
            throw new Error('Veiculo informado não cadastrado!')
        }

        try {
            await database.veiculos.destroy({
                where: {
                    id: id
                }
            });
        } catch (error) {
            console.error('Message error: ', error.message)
            throw error;
        }
    }

    async editarVeiculo(dto) {
        const veiculo = await database.veiculos.findOne({
            where: {
                id: dto.id
            }
        });

        if (!veiculo) {
            throw new Error('Veiculo informado não cadastrado!')
        }

        try {
            veiculo.nome = dto.nome
            veiculo.marca = dto.marca
            veiculo.preco = dto.preco

            await veiculo.save()

            return await veiculo.reload()
        } catch (error) {
            console.error('Message error: ', error.message)
            throw error
        }
    }
}

module.exports = VeiculoService