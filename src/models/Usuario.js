const { connect } = require('../database/connect');
const sequelize = require('sequelize');

const Usuario = connect.define('usuario', {
    name: {
        type: sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "Favor informar o nome"
            },
        }
    },
    email: {
        type: sequelize.STRING,
        unique: {
            msg: "Este e-mail já esta cadastrado."
        },
        validate: {
            isEmail: {
                msg: 'Email informado inválido'
            },
        }
    },
    password: {
        type: sequelize.STRING,
        validate: {
            is: {
                args: /^(?=.*\d)(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
                msg: "A senha deve ter 8 caracteres, 1 Letra Maiúscula, 1 Número e 1 Símbolo no mínimo: $*&@#"
            }
        }
    },
    createdAt: {
        type: sequelize.DATE
    },
    updatedAt: {
        type: sequelize.DATE
    },

}, { underscored: true, timestamps: true });

module.exports = { Usuario }