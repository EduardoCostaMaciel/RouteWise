"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Customers",
      [
        // Scooby-Doo
        {
          id: "c1a10d17-96be-4a29-9bb3-0b83dfebfc01",
          name: "Scooby-Doo",
          email: "scooby.doo@gmail.com",
          image_url: "public/images/customers/scoobyDoo.jpg",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        // Pernalonga
        {
          id: "dd22192b-3c48-45c5-b98f-c2327f09a5ef",
          name: "Pernalonga",
          email: "pernalonga@gmail.com",
          image_url: "public/images/customers/pernalonga.jpg",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        // Patrick Estrela
        {
          id: "b2fe2cc1-8100-4d4b-bfcd-20e6e7e42034",
          name: "Patrick Estrela",
          email: "patrick.estrela@gmail.com",
          image_url: "public/images/customers/patrickEstrela.jpg",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        // Coragem, o Cão Covarde
        {
          id: "6248b1d2-4e4c-4cc1-b0fa-68c26be28528",
          name: "Coragem, o Cão Covarde",
          email: "coragem.cao@gmail.com",
          image_url: "public/images/customers/coragem.jpg",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        // Johnny Bravo
        {
          id: "08f45f85-1e55-4a8c-9cf4-b0749d6c573a",
          name: "Johnny Bravo",
          email: "johnny.bravo@gmail.com",
          image_url: "public/images/customers/johnnyBravo.jpg",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        // Rick Sanchez
        {
          id: "98b8fc67-443f-4b76-b3b9-c17a3d00222f",
          name: "Rick Sanchez",
          email: "rick.sanchez@gmail.com",
          image_url: "public/images/customers/rickSanchez.jpg",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        // Agnes (Meu Malvado Favorito)
        {
          id: "a4520af4-062b-49ec-bb92-87dc9e1ed12c",
          name: "Agnes (Meu Malvado Favorito)",
          email: "agnes.fofa@gmail.com",
          image_url: "public/images/customers/agnes.jpg",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        // Shrek
        {
          id: "ac88d2d1-f1c0-44e6-b231-e2f18c832a86",
          name: "Shrek",
          email: "shrek@gmail.com",
          image_url: "public/images/customers/shrek.jpg",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        // Pica-Pau
        {
          id: "d14e0c5e-7434-4437-8666-34864739265f",
          name: "Pica-Pau",
          email: "pica.pau@gmail.com",
          image_url: "public/images/customers/picapau.jpg",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        // Patolino
        {
          id: "11ce5ee1-817a-4aed-a265-744eb88a6a91",
          name: "Patolino",
          email: "patolino@gmail.com",
          image_url: "public/images/customers/patolino.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Customers", null, {});
  },
};
