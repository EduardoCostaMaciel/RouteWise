import { Model, DataTypes } from "sequelize";
import {sequelize} from "../index";

import CustomerDriverInteraction from "./customerdriverinteraction";

class Customer extends Model {
  declare id: string;
  declare name: string;
  declare email: string;
  declare image_url: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;

  static associate(models: {
    CustomerDriverInteraction: typeof CustomerDriverInteraction;
  }) {
    Customer.hasMany(models.CustomerDriverInteraction, {
      foreignKey: "customer_id",
      onDelete: "CASCADE",
    });
  }
}

Customer.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "Customers",
    timestamps: true,
    underscored: true,
  }
);

export default Customer;
