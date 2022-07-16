import { DataSource } from "typeorm"
import env from '../init/LoadEnv'
import { User } from "./UserTable"
export default class Database {
    private AppDataSource:DataSource
    constructor(){
        
        this.AppDataSource = new DataSource({
            type: "mysql",
            host: env.DATABASE_HOST,
            port: Number(env.DATABASE_PORT),
            username:env.DATABASE_USER,
            password:env.DATABASE_PASSWORD,
            database: env.DATABASE_NAME,
            entities: [User],
            synchronize: true,
            
            
           
           
        })
        //console.log('-d-->',env.DATABASE_USER)

    }
    async init(){
        await this.AppDataSource.initialize()

    }
    public getDataSource():DataSource{
        return this.AppDataSource
    }
}
export const db = new Database()
