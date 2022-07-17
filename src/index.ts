import {sum} from './function'
import mainApp from './MainApp'
import { createUser } from './fakeData/fakeUser'
import env from './init/LoadEnv'
import "reflect-metadata"


//createUser()
console.log(env.DATABASE_USER)
const app = new mainApp(Number(env.APP_PORT))
app.run()
