"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Drivers", {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        // autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      image_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vehicle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      review_rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      review_comment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price_per_km: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      min_km: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Drivers");
  },
};
