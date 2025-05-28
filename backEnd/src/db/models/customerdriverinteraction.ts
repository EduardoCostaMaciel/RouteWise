import { Model, DataTypes, Association } from "sequelize";
import {sequelize} from "../index";

import Customer from "./customer";
import Driver from "./driver";

class CustomerDriverInteraction extends Model {
  declare id: number;
  declare customer_id: string;
  declare driver_id: string;
  declare interaction: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;

  static associate(models: {
    Customer: typeof Customer;
    Driver: typeof Driver;
  }) {
    CustomerDriverInteraction.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      onDelete: "CASCADE",
    });

    CustomerDriverInteraction.belongsTo(models.Driver, {
      foreignKey: "driver_id",
      onDelete: "CASCADE",
    });
  }
}

CustomerDriverInteraction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    driver_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    interaction: {
      type: DataTypes.TEXT,
      allowNull: false
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
    tableName: "CustomerDriverInteractions",
    timestamps: true,
    underscored: true,
  }
);

export default CustomerDriverInteraction;
