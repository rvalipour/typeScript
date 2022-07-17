"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MainApp_1 = require("./MainApp");
const LoadEnv_1 = require("./init/LoadEnv");
require("reflect-metadata");
//createUser()
console.log(LoadEnv_1.default.DATABASE_USER);
const app = new MainApp_1.default(Number(LoadEnv_1.default.APP_PORT));
app.run();
