"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "CustomerDriverInteractions",
      [
        // Scooby-Doo
        {
          customer_id: "c1a10d17-96be-4a29-9bb3-0b83dfebfc01",
          driver_id: "f695c91e-5ff5-5e54-97d6-1e47c64adacd", // Homer Simpson
          interaction:
            "Scooby ficou confuso com os comandos do Homer, mas se divertiu com os donuts.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "c1a10d17-96be-4a29-9bb3-0b83dfebfc01",
          driver_id: "d073f6c5-9d65-57d3-8707-f63b1371e2ee", // Dominic Toretto
          interaction:
            "Scooby gritou de emoção nas curvas com o Toretto, mas sobreviveu!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "c1a10d17-96be-4a29-9bb3-0b83dfebfc01",
          driver_id: "ce71b273-1737-5d6b-b0db-3a889af7dc84", // James Bond 007
          interaction:
            "Scooby ficou encantado com a elegância de Bond, mas morrendo de medo da ação.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "c1a10d17-96be-4a29-9bb3-0b83dfebfc01",
          driver_id: "9e08a2c2-35e6-5f2f-a70a-143eb859bd3c", // Mario Bros
          interaction:
            "Scooby quis pilotar o kart junto com Mario, mas quase caiu na pista.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "c1a10d17-96be-4a29-9bb3-0b83dfebfc01",
          driver_id: "fa2d9e8e-8f4c-4d3b-9c1e-5b859cde30b9", // Optimus Prime
          interaction:
            "Scooby achou que o caminhão do Optimus ia se transformar e fugiu.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "c1a10d17-96be-4a29-9bb3-0b83dfebfc01",
          driver_id: "e119d623-390f-4e84-bb15-d3fdbab8df5c", // Mr. Bean
          interaction:
            "Scooby e Mr. Bean fizeram confusão o caminho inteiro, mas foi hilário!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "c1a10d17-96be-4a29-9bb3-0b83dfebfc01",
          driver_id: "a1e24d55-6c52-4e88-9854-1bba3e0dfdb1", // Mad Max
          interaction:
            "Scooby se escondeu o trajeto inteiro achando que Mad Max era vilão do mistério!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "c1a10d17-96be-4a29-9bb3-0b83dfebfc01",
          driver_id: "e8fd4693-53b7-441e-b9b0-cc15a7e9e789", // Buzz Lightyear
          interaction:
            "Scooby achou que ia sair voando com Buzz Lightyear, gritou o tempo todo!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "c1a10d17-96be-4a29-9bb3-0b83dfebfc01",
          driver_id: "4d3f2c72-248a-4a2f-9b6c-0ec12bc75c29", // Tracer
          interaction:
            "Scooby não conseguia acompanhar Tracer, parecia estar em câmera lenta!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "c1a10d17-96be-4a29-9bb3-0b83dfebfc01",
          driver_id: "39d8a0cb-45aa-4c5b-98f2-3d8e63403ac1", // Motoqueiro Fantasma
          interaction:
            "Scooby desmaiou quando viu o Motoqueiro Fantasma com a cabeça pegando fogo!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Pernalonga
        {
          customer_id: "dd22192b-3c48-45c5-b98f-c2327f09a5ef",
          driver_id: "f695c91e-5ff5-5e54-97d6-1e47c64adacd",
          interaction:
            "Pernalonga fez piada o caminho todo com os donuts do Homer e ainda saiu com um pacote no bolso.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "dd22192b-3c48-45c5-b98f-c2327f09a5ef",
          driver_id: "d073f6c5-9d65-57d3-8707-f63b1371e2ee",
          interaction:
            "Pernalonga apostou corrida com o Dom e venceu usando um atalho de desenho animado.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "dd22192b-3c48-45c5-b98f-c2327f09a5ef",
          driver_id: "ce71b273-1737-5d6b-b0db-3a889af7dc84",
          interaction:
            "Pernalonga apareceu no banco de trás do Bond com um terno e óculos escuros: 'Licença, agente coelho chegando.'",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "dd22192b-3c48-45c5-b98f-c2327f09a5ef",
          driver_id: "9e08a2c2-35e6-5f2f-a70a-143eb859bd3c",
          interaction:
            "Pernalonga usou a buzina do kart do Mario como instrumento musical durante o trajeto.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "dd22192b-3c48-45c5-b98f-c2327f09a5ef",
          driver_id: "fa2d9e8e-8f4c-4d3b-9c1e-5b859cde30b9",
          interaction:
            "Pernalonga ficou tentando hackear o Optimus Prime pra fazer ele dançar break.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "dd22192b-3c48-45c5-b98f-c2327f09a5ef",
          driver_id: "e119d623-390f-4e84-bb15-d3fdbab8df5c",
          interaction:
            "Pernalonga entrou no Mini do Mr. Bean com uma cenoura e já virou copiloto sem ser convidado.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "dd22192b-3c48-45c5-b98f-c2327f09a5ef",
          driver_id: "a1e24d55-6c52-4e88-9854-1bba3e0dfdb1",
          interaction:
            "Pernalonga levou uma sombrinha para a corrida com Mad Max: 'Previsão de areia, docinho?'",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "dd22192b-3c48-45c5-b98f-c2327f09a5ef",
          driver_id: "e8fd4693-53b7-441e-b9b0-cc15a7e9e789",
          interaction:
            "Pernalonga pediu pra Buzz Lightyear parar na lua rapidinho só pra tirar uma selfie.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "dd22192b-3c48-45c5-b98f-c2327f09a5ef",
          driver_id: "4d3f2c72-248a-4a2f-9b6c-0ec12bc75c29",
          interaction:
            "Pernalonga tentou convencer a Tracer a parar no tempo pra comprar mais cenouras.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "dd22192b-3c48-45c5-b98f-c2327f09a5ef",
          driver_id: "39d8a0cb-45aa-4c5b-98f2-3d8e63403ac1",
          interaction:
            "Pernalonga se escondeu da moto flamejante do Motoqueiro Fantasma dentro de um hidrante animado.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Patrick Estrela
        {
          customer_id: "b2fe2cc1-8100-4d4b-bfcd-20e6e7e42034",
          driver_id: "f695c91e-5ff5-5e54-97d6-1e47c64adacd",
          interaction:
            "Patrick achou que o carro do Homer era um restaurante flutuante e ficou esperando um hambúrguer.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "b2fe2cc1-8100-4d4b-bfcd-20e6e7e42034",
          driver_id: "d073f6c5-9d65-57d3-8707-f63b1371e2ee",
          interaction:
            "Patrick ficou impressionado com o carro do Dom, achando que estava numa corrida de carrinho bate-bate.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "b2fe2cc1-8100-4d4b-bfcd-20e6e7e42034",
          driver_id: "ce71b273-1737-5d6b-b0db-3a889af7dc84",
          interaction:
            "Patrick confundiu o James Bond com um garçom de festa chique e pediu água com gás.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "b2fe2cc1-8100-4d4b-bfcd-20e6e7e42034",
          driver_id: "9e08a2c2-35e6-5f2f-a70a-143eb859bd3c",
          interaction:
            "Patrick tentou dirigir o kart do Mario achando que era um brinquedo de parque.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "b2fe2cc1-8100-4d4b-bfcd-20e6e7e42034",
          driver_id: "fa2d9e8e-8f4c-4d3b-9c1e-5b859cde30b9",
          interaction:
            "Patrick perguntou se o Optimus Prime virava cama durante a viagem.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "b2fe2cc1-8100-4d4b-bfcd-20e6e7e42034",
          driver_id: "e119d623-390f-4e84-bb15-d3fdbab8df5c",
          interaction:
            "Patrick ficou tentando tocar buzina com Mr. Bean, sem perceber que era o limpador de para-brisa.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "b2fe2cc1-8100-4d4b-bfcd-20e6e7e42034",
          driver_id: "a1e24d55-6c52-4e88-9854-1bba3e0dfdb1",
          interaction:
            "Patrick levou areia do fundo do mar pro carro do Mad Max e achou que estava ajudando no cenário.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "b2fe2cc1-8100-4d4b-bfcd-20e6e7e42034",
          driver_id: "e8fd4693-53b7-441e-b9b0-cc15a7e9e789",
          interaction:
            "Patrick ficou perguntando pro Buzz se ele podia fazer uma parada em Netuno.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "b2fe2cc1-8100-4d4b-bfcd-20e6e7e42034",
          driver_id: "4d3f2c72-248a-4a2f-9b6c-0ec12bc75c29",
          interaction:
            "Patrick tentou usar o óculos da Tracer achando que era um headset de jogo.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "b2fe2cc1-8100-4d4b-bfcd-20e6e7e42034",
          driver_id: "39d8a0cb-45aa-4c5b-98f2-3d8e63403ac1",
          interaction:
            "Patrick achou que a moto flamejante do Motoqueiro Fantasma era uma grelha e tentou assar marshmallows.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Coragem, o Cão Covarde
        {
          customer_id: "6248b1d2-4e4c-4cc1-b0fa-68c26be28528",
          driver_id: "f695c91e-5ff5-5e54-97d6-1e47c64adacd",
          interaction:
            "Coragem gritou de pavor quando o carro do Homer fez um barulho estranho, mas no fim dormiu com o som do motor.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "6248b1d2-4e4c-4cc1-b0fa-68c26be28528",
          driver_id: "d073f6c5-9d65-57d3-8707-f63b1371e2ee",
          interaction:
            "Coragem se escondeu no porta-luvas quando Dom ligou o motor do Charger com aquele ronco assustador.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "6248b1d2-4e4c-4cc1-b0fa-68c26be28528",
          driver_id: "ce71b273-1737-5d6b-b0db-3a889af7dc84",
          interaction:
            "Coragem achou que James Bond era um vilão disfarçado e tentou desarmar o carro-espião com um osso.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "6248b1d2-4e4c-4cc1-b0fa-68c26be28528",
          driver_id: "9e08a2c2-35e6-5f2f-a70a-143eb859bd3c",
          interaction:
            "Coragem se confundiu com as curvas do kart do Mario e latiu para cada banana que via na pista.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "6248b1d2-4e4c-4cc1-b0fa-68c26be28528",
          driver_id: "fa2d9e8e-8f4c-4d3b-9c1e-5b859cde30b9",
          interaction:
            "Coragem tentou fugir do Optimus Prime pensando que ele era um alienígena tentando abduzi-lo.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "6248b1d2-4e4c-4cc1-b0fa-68c26be28528",
          driver_id: "e119d623-390f-4e84-bb15-d3fdbab8df5c",
          interaction:
            "Coragem ficou hipnotizado pelo Mr. Bean dirigindo do banco de trás e começou a imitar seus gestos.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "6248b1d2-4e4c-4cc1-b0fa-68c26be28528",
          driver_id: "a1e24d55-6c52-4e88-9854-1bba3e0dfdb1",
          interaction:
            "Coragem se escondeu atrás do banco com medo do deserto, até perceber que Mad Max oferecia ração.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "6248b1d2-4e4c-4cc1-b0fa-68c26be28528",
          driver_id: "e8fd4693-53b7-441e-b9b0-cc15a7e9e789",
          interaction:
            "Coragem pensou que estava sendo levado para outro planeta quando entrou na nave do Buzz Lightyear.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "6248b1d2-4e4c-4cc1-b0fa-68c26be28528",
          driver_id: "4d3f2c72-248a-4a2f-9b6c-0ec12bc75c29",
          interaction:
            "Coragem ficou tonto tentando acompanhar os movimentos temporais da Tracer.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "6248b1d2-4e4c-4cc1-b0fa-68c26be28528",
          driver_id: "39d8a0cb-45aa-4c5b-98f2-3d8e63403ac1",
          interaction:
            "Coragem uivou ao ver as chamas do Motoqueiro Fantasma e se enrolou no cinto de segurança como um casulo.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Johnny Bravo
        {
          customer_id: "08f45f85-1e55-4a8c-9cf4-b0749d6c573a",
          driver_id: "f695c91e-5ff5-5e54-97d6-1e47c64adacd",
          interaction:
            "Johnny tentou impressionar Homer com seus músculos, mas acabou aceitando um donut no meio da cantada.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "08f45f85-1e55-4a8c-9cf4-b0749d6c573a",
          driver_id: "d073f6c5-9d65-57d3-8707-f63b1371e2ee",
          interaction:
            "Johnny desafiou Dom para ver quem tinha o bíceps mais bombado durante o trajeto.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "08f45f85-1e55-4a8c-9cf4-b0749d6c573a",
          driver_id: "ce71b273-1737-5d6b-b0db-3a889af7dc84",
          interaction:
            "Johnny tentou flertar com o sistema de navegação do Aston Martin achando que era uma voz feminina.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "08f45f85-1e55-4a8c-9cf4-b0749d6c573a",
          driver_id: "9e08a2c2-35e6-5f2f-a70a-143eb859bd3c",
          interaction:
            "Johnny quis dirigir o kart do Mario, mas ficou preso no volante por causa do topete.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "08f45f85-1e55-4a8c-9cf4-b0749d6c573a",
          driver_id: "fa2d9e8e-8f4c-4d3b-9c1e-5b859cde30b9",
          interaction:
            "Johnny chamou Optimus Prime de 'carrão malhado' e tentou convencê-lo a malhar com ele na academia.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "08f45f85-1e55-4a8c-9cf4-b0749d6c573a",
          driver_id: "e119d623-390f-4e84-bb15-d3fdbab8df5c",
          interaction:
            "Johnny ficou com ciúmes da atenção que Mr. Bean recebia dos outros motoristas e tentou descer do carro antes da hora.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "08f45f85-1e55-4a8c-9cf4-b0749d6c573a",
          driver_id: "a1e24d55-6c52-4e88-9854-1bba3e0dfdb1",
          interaction:
            "Johnny achou que estava num filme de ação e ficou gritando 'Yeah baby!' enquanto Mad Max desviava de explosões imaginárias.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "08f45f85-1e55-4a8c-9cf4-b0749d6c573a",
          driver_id: "e8fd4693-53b7-441e-b9b0-cc15a7e9e789",
          interaction:
            "Johnny tentou competir com Buzz Lightyear no grito mais estiloso: 'Ao infinito!' vs 'Uhh, mama!'.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "08f45f85-1e55-4a8c-9cf4-b0749d6c573a",
          driver_id: "4d3f2c72-248a-4a2f-9b6c-0ec12bc75c29",
          interaction:
            "Johnny tentou conquistar Tracer com frases de efeito, mas ela já tinha acelerado antes da cantada terminar.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "08f45f85-1e55-4a8c-9cf4-b0749d6c573a",
          driver_id: "39d8a0cb-45aa-4c5b-98f2-3d8e63403ac1",
          interaction:
            "Johnny gritou 'Uhh, quente!' toda vez que o Motoqueiro Fantasma acelerava e soltava fogo pelas rodas.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Rick Sanchez
        {
          customer_id: "98b8fc67-443f-4b76-b3b9-c17a3d00222f",
          driver_id: "f695c91e-5ff5-5e54-97d6-1e47c64adacd",
          interaction:
            "Rick conectou um portal ao carro do Homer e acidentalmente pararam em uma dimensão só de donuts.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "98b8fc67-443f-4b76-b3b9-c17a3d00222f",
          driver_id: "d073f6c5-9d65-57d3-8707-f63b1371e2ee",
          interaction:
            "Rick elogiou o carro do Dom, mas disse que já construiu algo 10 vezes mais rápido com peças de um micro-ondas.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "98b8fc67-443f-4b76-b3b9-c17a3d00222f",
          driver_id: "ce71b273-1737-5d6b-b0db-3a889af7dc84",
          interaction:
            "Rick hackeou o Aston Martin do Bond e fez com que ele falasse com voz de pato o trajeto inteiro.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "98b8fc67-443f-4b76-b3b9-c17a3d00222f",
          driver_id: "9e08a2c2-35e6-5f2f-a70a-143eb859bd3c",
          interaction:
            "Rick e Mario travaram um debate filosófico sobre cogumelos e realidades alternativas durante a viagem.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "98b8fc67-443f-4b76-b3b9-c17a3d00222f",
          driver_id: "fa2d9e8e-8f4c-4d3b-9c1e-5b859cde30b9",
          interaction:
            "Rick tentou desmontar o Optimus Prime no meio do caminho só pra entender como um caminhão pode ter alma.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "98b8fc67-443f-4b76-b3b9-c17a3d00222f",
          driver_id: "e119d623-390f-4e84-bb15-d3fdbab8df5c",
          interaction:
            "Rick confundiu o carro do Mr. Bean com um brinquedo e tentou encolhê-lo com sua arma de partículas.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "98b8fc67-443f-4b76-b3b9-c17a3d00222f",
          driver_id: "a1e24d55-6c52-4e88-9854-1bba3e0dfdb1",
          interaction:
            "Rick e Mad Max discutiram quem sobreviveria por mais tempo em um apocalipse interdimensional.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "98b8fc67-443f-4b76-b3b9-c17a3d00222f",
          driver_id: "e8fd4693-53b7-441e-b9b0-cc15a7e9e789",
          interaction:
            "Rick sequestrou a nave do Buzz por 10 minutos para 'melhorias de performance', quase criando um buraco negro.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "98b8fc67-443f-4b76-b3b9-c17a3d00222f",
          driver_id: "4d3f2c72-248a-4a2f-9b6c-0ec12bc75c29",
          interaction:
            "Rick tentou entender como Tracer manipula o tempo, mas acabou ficando preso em um loop temporal de 10 minutos.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "98b8fc67-443f-4b76-b3b9-c17a3d00222f",
          driver_id: "39d8a0cb-45aa-4c5b-98f2-3d8e63403ac1",
          interaction:
            "Rick ofereceu transformar a moto flamejante do Motoqueiro Fantasma em um hoverboard, mas o fogo quase queimou a cabine.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Agnes (Meu Malvado Favorito)
        {
          customer_id: "a4520af4-062b-49ec-bb92-87dc9e1ed12c",
          driver_id: "f695c91e-5ff5-5e54-97d6-1e47c64adacd",
          interaction:
            "Agnes fez o Homer prometer parar pra comprar unicórnios de pelúcia antes de seguir viagem.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "a4520af4-062b-49ec-bb92-87dc9e1ed12c",
          driver_id: "d073f6c5-9d65-57d3-8707-f63b1371e2ee",
          interaction:
            "Agnes pediu para o Dominic dirigir mais devagar porque 'meus bichinhos estão com medo'.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "a4520af4-062b-49ec-bb92-87dc9e1ed12c",
          driver_id: "ce71b273-1737-5d6b-b0db-3a889af7dc84",
          interaction:
            "Agnes achou o carro do Bond muito sério, então colou adesivos de glitter em todo painel.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "a4520af4-062b-49ec-bb92-87dc9e1ed12c",
          driver_id: "9e08a2c2-35e6-5f2f-a70a-143eb859bd3c",
          interaction:
            "Agnes gritou de alegria o caminho todo com o Mario, achando que estavam em um brinquedo de parque.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "a4520af4-062b-49ec-bb92-87dc9e1ed12c",
          driver_id: "fa2d9e8e-8f4c-4d3b-9c1e-5b859cde30b9",
          interaction:
            "Agnes ficou fascinada com o tamanho do Optimus Prime e queria dormir no porta-malas gigante dele.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "a4520af4-062b-49ec-bb92-87dc9e1ed12c",
          driver_id: "e119d623-390f-4e84-bb15-d3fdbab8df5c",
          interaction:
            "Agnes achou o Mr. Bean um ótimo amigo de conversa, principalmente quando ele fazia caretas.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "a4520af4-062b-49ec-bb92-87dc9e1ed12c",
          driver_id: "a1e24d55-6c52-4e88-9854-1bba3e0dfdb1",
          interaction:
            "Agnes achou o carro do Mad Max 'muito poeirento', então tentou decorar com flores coloridas.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "a4520af4-062b-49ec-bb92-87dc9e1ed12c",
          driver_id: "e8fd4693-53b7-441e-b9b0-cc15a7e9e789",
          interaction:
            "Agnes ficou tentando apertar todos os botões da nave do Buzz dizendo: 'Esse deve ser o botão do arco-íris!'",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "a4520af4-062b-49ec-bb92-87dc9e1ed12c",
          driver_id: "4d3f2c72-248a-4a2f-9b6c-0ec12bc75c29",
          interaction:
            "Agnes ficou encantada com os efeitos de luz da moto da Tracer e pediu uma versão rosa brilhante.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "a4520af4-062b-49ec-bb92-87dc9e1ed12c",
          driver_id: "39d8a0cb-45aa-4c5b-98f2-3d8e63403ac1",
          interaction:
            "Agnes não ficou com medo do Motoqueiro Fantasma e disse: 'Você é só um esqueleto com fogo. Cadê os unicórnios?'",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Shrek
        {
          customer_id: "ac88d2d1-f1c0-44e6-b231-e2f18c832a86",
          driver_id: "f695c91e-5ff5-5e54-97d6-1e47c64adacd",
          interaction:
            "Shrek e Homer discutiram sobre donuts e cebolas. No fim, dividiram um lanche em silêncio.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "ac88d2d1-f1c0-44e6-b231-e2f18c832a86",
          driver_id: "d073f6c5-9d65-57d3-8707-f63b1371e2ee",
          interaction:
            "Shrek ficou impressionado com o carro do Dominic, mas disse que preferia andar de burro.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "ac88d2d1-f1c0-44e6-b231-e2f18c832a86",
          driver_id: "ce71b273-1737-5d6b-b0db-3a889af7dc84",
          interaction:
            "James Bond ofereceu um Martini ao Shrek, que respondeu: 'Prefiro algo mais... pantanoso.'",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "ac88d2d1-f1c0-44e6-b231-e2f18c832a86",
          driver_id: "9e08a2c2-35e6-5f2f-a70a-143eb859bd3c",
          interaction:
            "Shrek elogiou o kart do Mario, mas perguntou se ele aguentava andar no pântano.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "ac88d2d1-f1c0-44e6-b231-e2f18c832a86",
          driver_id: "fa2d9e8e-8f4c-4d3b-9c1e-5b859cde30b9",
          interaction:
            "Shrek perguntou ao Optimus Prime se ele virava ogro também ou só caminhão.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "ac88d2d1-f1c0-44e6-b231-e2f18c832a86",
          driver_id: "e119d623-390f-4e84-bb15-d3fdbab8df5c",
          interaction:
            "Mr. Bean tentou se comunicar com Shrek só com caretas. Shrek achou divertido, mas confuso.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "ac88d2d1-f1c0-44e6-b231-e2f18c832a86",
          driver_id: "a1e24d55-6c52-4e88-9854-1bba3e0dfdb1",
          interaction:
            "Shrek e Mad Max trocaram receitas de sobrevivência no deserto e no pântano.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "ac88d2d1-f1c0-44e6-b231-e2f18c832a86",
          driver_id: "e8fd4693-53b7-441e-b9b0-cc15a7e9e789",
          interaction:
            "Buzz tentou explicar a Shrek sobre viagens intergalácticas. Shrek só queria ir pro castelo.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "ac88d2d1-f1c0-44e6-b231-e2f18c832a86",
          driver_id: "4d3f2c72-248a-4a2f-9b6c-0ec12bc75c29",
          interaction:
            "Tracer deu carona ao Shrek e ficou confusa quando ele pediu pra parar no brejo.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "ac88d2d1-f1c0-44e6-b231-e2f18c832a86",
          driver_id: "39d8a0cb-45aa-4c5b-98f2-3d8e63403ac1",
          interaction:
            "Shrek perguntou ao Motoqueiro Fantasma se o fogo na cabeça dele assustava os ratos do pântano.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // pica-pau
        {
          customer_id: "d14e0c5e-7434-4437-8666-34864739265f",
          driver_id: "f695c91e-5ff5-5e54-97d6-1e47c64adacd",
          interaction:
            "Pica-Pau roubou o volante do Homer por 5 minutos só pra fazer zigue-zague na estrada.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "d14e0c5e-7434-4437-8666-34864739265f",
          driver_id: "d073f6c5-9d65-57d3-8707-f63b1371e2ee",
          interaction:
            "Dom tentou fazer cara séria, mas o Pica-Pau colou olhos esbugalhados no retrovisor inteiro.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "d14e0c5e-7434-4437-8666-34864739265f",
          driver_id: "ce71b273-1737-5d6b-b0db-3a889af7dc84",
          interaction:
            "Pica-Pau apertou o botão secreto do carro do Bond e lançou os dois num salto com paraquedas.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "d14e0c5e-7434-4437-8666-34864739265f",
          driver_id: "9e08a2c2-35e6-5f2f-a70a-143eb859bd3c",
          interaction:
            "Durante a corrida com o Mario, Pica-Pau jogou casca de banana só pra ver o caos.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "d14e0c5e-7434-4437-8666-34864739265f",
          driver_id: "fa2d9e8e-8f4c-4d3b-9c1e-5b859cde30b9",
          interaction:
            "Pica-Pau tentou convencer o Optimus Prime a virar um parque de diversões móvel.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "d14e0c5e-7434-4437-8666-34864739265f",
          driver_id: "e119d623-390f-4e84-bb15-d3fdbab8df5c",
          interaction:
            "Pica-Pau se escondeu no porta-malas do Mini Cooper do Mr. Bean só pra pregar peça.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "d14e0c5e-7434-4437-8666-34864739265f",
          driver_id: "a1e24d55-6c52-4e88-9854-1bba3e0dfdb1",
          interaction:
            "Pica-Pau e Mad Max correram lado a lado... até o Pica-Pau explodir um balão de água no Max.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "d14e0c5e-7434-4437-8666-34864739265f",
          driver_id: "e8fd4693-53b7-441e-b9b0-cc15a7e9e789",
          interaction:
            "Pica-Pau tentou pilotar a nave do Buzz dizendo: 'Ao infinito e além do limite de velocidade!'",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "d14e0c5e-7434-4437-8666-34864739265f",
          driver_id: "4d3f2c72-248a-4a2f-9b6c-0ec12bc75c29",
          interaction:
            "Tracer mal piscou e Pica-Pau já estava no volante acelerando a Chrono Bike.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "d14e0c5e-7434-4437-8666-34864739265f",
          driver_id: "39d8a0cb-45aa-4c5b-98f2-3d8e63403ac1",
          interaction:
            "Pica-Pau assoviou a viagem inteira e o Motoqueiro Fantasma respondeu com fogo nas rodas.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // patolino
        {
          customer_id: "11ce5ee1-817a-4aed-a265-744eb88a6a91",
          driver_id: "f695c91e-5ff5-5e54-97d6-1e47c64adacd",
          interaction:
            "Patolino tentou convencer Homer a correr em troca de uma caixa de donuts, e quase conseguiu!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "11ce5ee1-817a-4aed-a265-744eb88a6a91",
          driver_id: "d073f6c5-9d65-57d3-8707-f63b1371e2ee",
          interaction:
            "Patolino desafiou Dominic para uma corrida apostando seu chapéu — perdeu feio, mas jurou revanche!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "11ce5ee1-817a-4aed-a265-744eb88a6a91",
          driver_id: "ce71b273-1737-5d6b-b0db-3a889af7dc84",
          interaction:
            "Durante a corrida com Bond, Patolino exigiu que tocasse uma trilha sonora de espião o tempo todo.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "11ce5ee1-817a-4aed-a265-744eb88a6a91",
          driver_id: "9e08a2c2-35e6-5f2f-a70a-143eb859bd3c",
          interaction:
            "Patolino tentou dirigir o kart de Mario e quase virou o passeio em uma corrida de verdade!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "11ce5ee1-817a-4aed-a265-744eb88a6a91",
          driver_id: "fa2d9e8e-8f4c-4d3b-9c1e-5b859cde30b9",
          interaction:
            "Disse para o Optimus Prime: 'Você fala muito para um caminhão!' — e ganhou um sermão do Autobot.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "11ce5ee1-817a-4aed-a265-744eb88a6a91",
          driver_id: "e119d623-390f-4e84-bb15-d3fdbab8df5c",
          interaction:
            "Ficou imitando buzinas durante todo o trajeto com Mr. Bean. Bean adorou e respondeu com caretas.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "11ce5ee1-817a-4aed-a265-744eb88a6a91",
          driver_id: "a1e24d55-6c52-4e88-9854-1bba3e0dfdb1",
          interaction:
            "Desafiou Mad Max a fazer zerinhos no deserto — e saiu correndo quando a poeira levantou!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "11ce5ee1-817a-4aed-a265-744eb88a6a91",
          driver_id: "e8fd4693-53b7-441e-b9b0-cc15a7e9e789",
          interaction:
            "Patolino queria pilotar a nave com Buzz e ficou repetindo: 'Ao infinito e além!' até ser silenciado.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "11ce5ee1-817a-4aed-a265-744eb88a6a91",
          driver_id: "4d3f2c72-248a-4a2f-9b6c-0ec12bc75c29",
          interaction:
            "Com Tracer, tentou usar o cronômetro para 'viajar no tempo' e se perdeu no próprio horário de chegada.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: "11ce5ee1-817a-4aed-a265-744eb88a6a91",
          driver_id: "39d8a0cb-45aa-4c5b-98f2-3d8e63403ac1",
          interaction:
            "Na corrida com o Motoqueiro Fantasma, Patolino levou um extintor por precaução — só por garantia!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CustomerDriverInteractions", null, {});
  },
};
