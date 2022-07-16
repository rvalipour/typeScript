import { Sequelize } from "sequelize";
import env from '../../init/LoadEnv'
class DataBase {
    private connection:Sequelize;
    constructor(){
        this.connection = new Sequelize(env.DATABASE_NAME as string, env.DATABASE_USER as string, env.DATABASE_PASSWORD, {
            host: env.DATABASE_HOST,
            port: Number(env.DATABASE_PORT), // optional
            dialect: "mysql",
            logging:false,
        
            pool: {
                max: 10,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        })

    }
    async init(){
        try{
            await this.connection.authenticate()
        }catch(error){
            if (error instanceof Error) 
                console.log(error.message)
            else
                console.log('unknown error')
        }
        
    }
    public getConnection():Sequelize{
        return this.connection

    }
}
export const db = new DataBase()
export const sequelize = db.getConnection()