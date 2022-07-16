//import * as faker from  '@faker-js/faker';
import { faker } from '@faker-js/faker';
import {db} from '../DataBase/Sequelize/SequlizeDB'
import User from '../DataBase/Sequelize/userTable'
faker.setLocale('fa')
const count = 100
const users:any = []
export const  createUser = async()=>{
    for (let i = 0; i < 100; i++) {
        const user = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            mobile: faker.phone.number(),
           



        }

        users.push(user)
        //console.log(user)
    }
    await User.sync()
    await User.bulkCreate(users)
    console.table(users)

}