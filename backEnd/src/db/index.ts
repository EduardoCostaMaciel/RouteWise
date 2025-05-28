// import { Sequelize } from "sequelize";

// const config = require("./config/database.js");

// export default new Sequelize(config);

import { Sequelize } from "sequelize";
import Customer from "./models/customer";
import Driver from "./models/driver";
import CustomerDriverInteraction from './models/customerdriverinteraction';

const sequelize = new Sequelize(require("./config/database"));

// // Inicializa os models
// Customer.initModel(sequelize);
// Driver.initModel(sequelize);
// CustomerDriverInteraction.initModel(sequelize);

// Faz associações
Customer.associate({ CustomerDriverInteraction });
Driver.associate({ CustomerDriverInteraction });
CustomerDriverInteraction.associate({ Customer, Driver });

export {
  sequelize,
  Customer,
  Driver,
  CustomerDriverInteraction,
};