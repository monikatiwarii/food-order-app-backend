import express,{Request,Response} from "express"
import { AppDataSource } from "./utils/data-source"
import router from './routes/index.routes'
import path from 'path'
import * as fs from 'fs'

class Server{
    private app  :express.Application

    constructor(){
        this.app = express()
        this.configuration()
        this.routes()

    }

    public configuration(){

        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.use(express.static("public"));
    
        if (!fs.existsSync(path.join(__dirname, "public")))
            fs.mkdirSync(path.join(__dirname, "public"));

        this.app.set('port',8000)
        this.app.use(express.json())
        console.log('port')
    }

    public routes(){
        this.app.use('/api',router)
        this.app.get("/*",(req:Request,res:Response)=>{
            res.send('Invalid page url')
        })
        
    }

    public start(){
        this.app.listen(this.app.get('port'),()=>{
            console.log(`listening on port ${this.app.get('port')}`)
        })
    }
}

AppDataSource.initialize().then(async ()=>{
    const server = new Server();
    server.start()
}).catch((error : Error)=>{
    console.log(error)
})  