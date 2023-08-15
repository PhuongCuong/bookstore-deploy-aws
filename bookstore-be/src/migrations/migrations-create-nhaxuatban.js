'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    // userId: DataTypes.STRING,
    // tongTien: DataTypes.STRING,
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('nhaxuatbans', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            keyMap: {
                type: Sequelize.STRING
            },
            tenNXB: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('nhaxuatbans');
    }
};