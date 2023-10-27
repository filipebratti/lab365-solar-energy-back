const { Geracao } = require("../models/geracao");
const { Unidade } = require("../models/unidades");

class GeracaoController {

  async createOneGeracao(request, response) {

    const {  unidadeId,
             referenceDate, 
             totalGenerated 
            } = request.body
    
    try {

      if (!unidadeId) {
        throw new Error("O ID da inidade deve ser informada.")
      }

      if (!referenceDate) {
        throw new Error("O ano/mês de referencia deve ser informado")
      }

      if (!totalGenerated) {
        throw new Error("A quantidade deve KW ser informada.")
      }

      const geracaoMensal = await Geracao.findOne({
        where: {
          unidadeId,
          referenceDate
        }
      })

      if (geracaoMensal) {
        return response.status(400).send({ message: "Já existe lançamento para essa unidade nesse mês" })
      }

      const novaGeracaoMensal = await Geracao.create({
            unidadeId,
            referenceDate, 
            totalGenerated
      })

      return response.status(200).send({ "Identificador": Geracao.id, message: "Novo lançamento incluido com sucesso" })

    } catch (error) {

      if (error.message.split('\n').length > 1) {
        return response.status(400).json({ message: "Erro ao criar o lançamento", causes: error.message.split('\n') })
      }
      console.log(error.message.split('\n'))
      return response.status(400).json({ message: "Erro ao criar lançamento", cause: error.message })
    }
  }
  
  async listaGeracaoDaUnidade (request, response) {
    const { unidadeId } = request.params
    
    try { 

     const geracoes = await Geracao.findAll({
      where: { unidade_id: unidadeId},
    });
 
      return response.status(200).send(
       {
         "records": geracoes
       })

      
    } catch (error) {

      if (error.message.split('\n').length > 1) {
        return response.status(400).json({ message: "Erro ao consultar as gerações da unidade", causes: error.message.split('\n') })
      }
      console.log(error.message.split('\n'))
      return response.status(400).json({ message: "Erro ao consultar as gerações da unidade", cause: error.message })
    }    
  }
}

module.exports = new GeracaoController();