"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const SequlizeDB_1 = require("./SequlizeDB");
class User extends sequelize_1.Model {
}
exports.default = User;
User.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING
        // allowNull defaults to true
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    mobile: {
        type: sequelize_1.DataTypes.STRING(15)
    },
    password: {
        type: sequelize_1.DataTypes.STRING(64)
    },
    dateOfBirth: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    isAdmin: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    version: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    // Other model options go here
    sequelize: SequlizeDB_1.sequelize,
    modelName: 'User',
    tableName: 'Users',
    freezeTableName: true,
    version: true // optimistic lock
});
