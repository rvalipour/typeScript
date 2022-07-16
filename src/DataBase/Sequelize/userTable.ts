import { DataTypes, Model } from "sequelize";
import {sequelize} from './SequlizeDB'
export default class User extends Model {
}
User.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    email: {
        type: DataTypes.STRING

    },
    mobile: {
        type: DataTypes.STRING(15)

    },
    password: {
        type: DataTypes.STRING(64)
    },
    dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: true
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
    },
    version:{
        type:DataTypes.INTEGER,
        defaultValue:0
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
    tableName: 'Users',
    freezeTableName: true,
    version:true // optimistic lock
});