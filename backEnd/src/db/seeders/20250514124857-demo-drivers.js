"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Drivers",
      [
        // Homer Simpson
        {
          id: "f695c91e-5ff5-5e54-97d6-1e47c64adacd",
          name: "Homer Simpson",
          email: "homersimpson@gmail.com",
          image_url: "public/images/drivers/homerSimpson.jpg",
          description: "Olá! Sou o Homer, seu motorista camarada!",
          vehicle: "Plymouth Valiant 1973 rosa",
          review_rating: 2,
          review_comment: "Errou o caminho 3 vezes. Cheiro de donuts.",
          price_per_km: 2.5,
          min_km: 1,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        // Dominic Toretto
        {
          id: "d073f6c5-9d65-57d3-8707-f63b1371e2ee",
          name: "Dominic Toretto",
          email: "dom.toretto@gmail.com",
          image_url: "public/images/drivers/dominicToretto.jpg",
          description: "Ei, aqui é o Dom. Te levo rápido e seguro.",
          vehicle: "Dodge Charger R/T 1970",
          review_rating: 4,
          review_comment: "Motorista com cara fechada, mas muito gente boa.",
          price_per_km: 5,
          min_km: 5,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        // James Bond 007
        {
          id: "ce71b273-1737-5d6b-b0db-3a889af7dc84",
          name: "James Bond 007",
          email: "james.bond@gmail.com",
          image_url: "public/images/drivers/jamesBond.jpg",
          description: "Boa noite, sou James Bond. Um passeio de classe.",
          vehicle: "Aston Martin DB5 clássico",
          review_rating: 5,
          review_comment: "Serviço impecável. Experiência de agente secreto.",
          price_per_km: 10,
          min_km: 10,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        // Mario Bros
        {
          id: "9e08a2c2-35e6-5f2f-a70a-143eb859bd3c",
          name: "Mario Bros",
          email: "mario.bros@gmail.com",
          image_url: "public/images/drivers/marioBros.jpg",
          description: "Vamos nessa! Rápido como um kart.",
          vehicle: "Kart Vermelho Super Mario",
          review_rating: 4,
          review_comment: "Sempre animado. Grita 'It's-a me!' o tempo todo.",
          price_per_km: 3,
          min_km: 2,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        // Optimus Prime
        {
          id: "fa2d9e8e-8f4c-4d3b-9c1e-5b859cde30b9",
          name: "Optimus Prime",
          email: "optimus.prime@gmail.com",
          image_url: "public/images/drivers/optimusPrime.jpg",
          description: "Líder dos Autobots oferecendo transporte seguro.",
          vehicle: "Caminhão Peterbilt",
          review_rating: 5,
          review_comment: "Serviço de outro planeta!",
          price_per_km: 8,
          min_km: 15,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        // Mr. Bean
        {
          id: "e119d623-390f-4e84-bb15-d3fdbab8df5c",
          name: "Mr. Bean",
          email: "mr.bean@gmail.com",
          image_url: "public/images/drivers/mrBean.jpg",
          description:
            "Mr. Bean em seu mini verde... prepare-se para aventuras!",
          vehicle: "Mini Cooper verde 1977",
          review_rating: 2,
          review_comment: "Engraçado, mas dirigiu do banco de trás.",
          price_per_km: 2.3,
          min_km: 1,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        // Mad Max
        {
          id: "a1e24d55-6c52-4e88-9854-1bba3e0dfdb1",
          name: "Mad Max",
          email: "mad.max@gmail.com",
          image_url: "public/images/drivers/madMax.jpg",
          description:
            "Conhecido pelas fugas em alta velocidade no deserto pós-apocalíptico.",
          vehicle: "V8 Interceptor",
          review_rating: 5,
          review_comment: "Corajoso, silencioso e mortalmente eficiente.",
          price_per_km: 7.5,
          min_km: 8,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        // Buzz Lightyear
        {
          id: "e8fd4693-53b7-441e-b9b0-cc15a7e9e789",
          name: "Buzz Lightyear",
          email: "buzz.lightyear@gmail.com",
          image_url: "public/images/drivers/buzzLightyear.jpg",
          description: "Ao infinito... e além! Agora pilotando para você.",
          vehicle: "Nave Espacial da Star Command",
          review_rating: 5,
          review_comment: "Tecnologia de ponta e frases épicas.",
          price_per_km: 12.0,
          min_km: 15,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        // Tracer(overwatch)
        {
          id: "4d3f2c72-248a-4a2f-9b6c-0ec12bc75c29",
          name: "Tracer",
          email: "tracer.overwatch@gmail.com",
          image_url: "public/images/drivers/tracerOverwatch.jpg",
          description: "Velocidade e estilo. Sempre no tempo certo!",
          vehicle: "Chrono Bike",
          review_rating: 4,
          review_comment: "Muito rápida! Às vezes difícil de acompanhar.",
          price_per_km: 6.5,
          min_km: 4,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        // Motoqueiro Fantasma
        {
          id: "39d8a0cb-45aa-4c5b-98f2-3d8e63403ac1",
          name: "Motoqueiro Fantasma",
          email: "ghostrider@gmail.com",
          image_url: "public/images/drivers/motoqueiroFantasma.jpg",
          description:
            "Veloz, ardente e implacável nas rodovias da meia-noite.",
          vehicle: "Moto Flamejante Infernal",
          review_rating: 4,
          review_comment:
            "Assustador, mas sempre chega no horário. Literalmente incandescente.",
          price_per_km: 9.0,
          min_km: 6,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Drivers", null, {});
  },
};
// já foram
// Homer Simpson dirigindo um Plymouth rosa
// James Bond com um Aston Martin
// Mr. Bean no Mini verde
// Dominic Toretto com um Dodge Charger
// Optimus Prime como caminhão

// gerar imagens desses drivers que estão faltando
// não precisa gerar todas de uma vez, gere uma depois outra depois outra
// Mario em um kart
// Mad Max no deserto
// Buzz Lightyear com uma nave
// Tracer com sua moto futurista

// 📏 Tamanho (512x512)
// 🎨 estilo cartoon + fundo transparente
// 🚘 Quero que apareça o veículo junto com o personagem em cada imagem
// 📸 1 imagem por personagem/driver

