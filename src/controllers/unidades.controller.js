const {Unidade} = require('../models/Unidades');
class UnidadesController {
    async createOneUnidade(req, res) {
      const { nickname, address, brand, model, active } = req.body;
      
      try {
        if (!nickname || !address || !brand || !model || !active) {
          return res.status(400).json({ error: 'Campos obrigatórios faltando' });
        }
        await Unidade.create({
          nickname,
          address,
          brand,
          model,
          active,
        });
        return res.status(201).json();

      } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Erro ao criar unidade' });
      }
    }

    async listAllUnidades(req, res) {
      try {
        const unidades = await Unidade.findAll();
        return res.status(200).json(unidades);
      } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Erro ao listar unidades' });
      }
    }

    async listOneUnidade(req, res) {
      const { id } = req.params;
      try {
        const unidade = await Unidade.findByPk(id);
        if (!unidade) {
          return res.status(404).json({ error: 'Unidade não encontrada' });
        }
        return res.status(200).json(unidade);
      } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Erro ao listar unidade' });
      }
    }

    async listAllUnidadesAtivas(req, res) {
      try {
        const unidades = await Unidade.findAll({
          where: {
            active: 'S',
          },
        });
        return res.status(200).json(unidades);
      } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Erro ao listar unidades ativas' });
      }
    }

    async listAllUnidadesInativas(req, res) {
      try {
        const unidades = await Unidade.findAll({
          where: {
            active: 'N',
          },
        });
        return res.status(200).json(unidades);
      } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Erro ao listar unidades inativas' });
      }
    }

    async updateOneUnidade(req, res) {
      const { id } = req.params;
      const { nickname, address, brand, model, active } = req.body;
      try {
        const unidade = await Unidade.findByPk(id);
        if (!unidade) {
          return res.status(404).json({ error: 'Unidade não encontrada' });
        }
        await unidade.update({
          nickname,
          address,
          brand,
          model,
          active,
        });
        return res.status(200).json();
      } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Erro ao atualizar unidade' });
      }
    }

    async deleteOneUnidade(req, res) {
      const { id } = req.params;
      try {
        const unidade = await Unidade.findByPk(id);
        if (!unidade) {
          return res.status(404).json({ error: 'Unidade não encontrada' });
        }
        await unidade.destroy();
        return res.status(204).json();
      } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Erro ao deletar unidade' });
      }
    }

    async restoreOneUnidade(req, res) {
      const { id } = req.params;
      try {
        const unidade = await Unidade.findByPk(id, {
          paranoid: false,
        });
        if (!unidade) {
          return res.status(404).json({ error: 'Unidade não encontrada' });
        }
        await unidade.restore();
        return res.status(204).json();
      } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Erro ao restaurar unidade' });
      }
    }
  }
  
  module.exports = new UnidadesController();
  