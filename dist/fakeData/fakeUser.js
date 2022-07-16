"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
//import * as faker from  '@faker-js/faker';
const faker_1 = require("@faker-js/faker");
const userTable_1 = require("../DataBase/Sequelize/userTable");
faker_1.faker.setLocale('fa');
const count = 100;
const users = [];
const createUser = async () => {
    for (let i = 0; i < 100; i++) {
        const user = {
            firstName: faker_1.faker.name.firstName(),
            lastName: faker_1.faker.name.lastName(),
            email: faker_1.faker.internet.email(),
            mobile: faker_1.faker.phone.number(),
        };
        users.push(user);
        //console.log(user)
    }
    await userTable_1.default.sync();
    await userTable_1.default.bulkCreate(users);
    console.table(users);
};
exports.createUser = createUser;
