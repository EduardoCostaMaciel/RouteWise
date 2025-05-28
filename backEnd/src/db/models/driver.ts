import { Model, DataTypes } from "sequelize";
import {sequelize} from "../index";
import CustomerDriverInteraction from './customerdriverinteraction';

class Driver extends Model {
  declare id: number;
  declare name: string;
  declare image_url: string;
  declare description: string;
  declare vehicle: string;
  declare review_rating: number;
  declare review_comment: number;
  declare price_per_km: number;
  declare min_km: number;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;

  static associate(models: {
    CustomerDriverInteraction: typeof CustomerDriverInteraction
  }) {
    Driver.hasMany(models.CustomerDriverInteraction, {
      foreignKey: "driver_id",
      onDelete: "CASCADE"
    })
  }
}

Driver.init(
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    review_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    review_comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price_per_km: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    min_km: {
      type: DataTypes.INTEGER,
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
    tableName: "Drivers",
    timestamps: true,
    underscored: true,
  }
);

export default Driver;
