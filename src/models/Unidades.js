const { connect } = require('../database/connect');
const sequelize = require('sequelize');

const Unidade = connect.define('unidades', {

    nickname: {
        type: sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "O Apelido precisa ser informado."
            }
        }
    },
    address: {
        type: sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "O Local precisa ser informado."
            }
        }
    },
    brand: {
        type: sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "O Marca precisa ser informada."
            }
        }
    },
    model: {
        type: sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "O Modelo precisa ser informado."
            }
        }
    },
   
    active: {
        type: sequelize.ENUM('S', 'N')
    },
    createdAt: {
        type: sequelize.DATE
    },
    updatedAt: {
        type: sequelize.DATE
    },
    deletedAt: {
        type: sequelize.DATE
    }

}, { underscored: true, timestamps: true, paranoid: true });

module.exports = { Unidade }