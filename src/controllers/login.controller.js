const { Usuario } = require('../models/Usuario');
const { password } = require('../models/Usuario');
const { JWT_SECRET } = require('../config/config');
const { config } = require('dotenv');
const { sign } = require('jsonwebtoken');
const { response } = require('express');
config();

class LoginController {
    async loginUsuario(req, res) {
        try {
            const { email, password } = req.body;
            const usuario = await Usuario.findOne({
                where: { email: email }
            });

            if (!usuario) {
                return res.status(404).send({
                    message: 'Tentativa de Login Falhou!',
                    cause: 'E-mail não encontrado!'
                });
            }

            if (usuario.password !== password) {
                return res.status(401).send({
                    message: 'Tentativa de Login Falhou!',
                    cause: 'Senha Incorreta!'
                });
            }

            const payload = {
                "email": usuario.email,
                "password": usuario.password,
            };

            const token = sign(payload, JWT_SECRET, {
                expiresIn: '1d'
            });

            return res.status(200).send({
                message: 'Login realizado com sucesso!',
                token: token
            });

        } catch (error) {
            const status = error.message.status || 400;
            const message = error.message.message || error.message
            return res.status(parseInt(status)).send({
                message: "Falha na operação de criar usuário",
                cause: message
            });
        }
    }
}

module.exports = new LoginController();