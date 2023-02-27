require('dotenv').config()
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Server } from 'typeorm/driver/mongodb/typings';

type configType = {
    host :string;
    port : number;
    username : string;
    password : string;
    database : string;
}

const postgresConfig : configType = {
    host : 'localhost',
    port : 5432,
    username : "postgres",
    password : "postgres",
    database : "postgres"
}

export const AppDataSource = new DataSource({
    ...postgresConfig,
    type : "postgres",
    synchronize : true,
    logging : false,
    entities : [],
    migrations : [],
    subscribers : []
})

