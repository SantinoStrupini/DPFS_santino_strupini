'use strict';
const bcrypt = require('bcryptjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const categoryAdmin = await queryInterface.sequelize.query('select * from categories where userName = "admin"');

    await queryInterface.bulkInsert('users', [
      {
        userName: 'Administrador',
        email: 'admin@email.com' ,
        password: bcrypt.hashSync('123456', 10),
        categories_id: categoryAdmin[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
