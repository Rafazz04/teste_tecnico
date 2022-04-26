import express from "express"
import cors from "cors"
import { Router } from "express";
import rotas from "./rotas"
import "./database"

class App{
   constructor(){
       this.server = express();
       this.middlewares()
       this.routes()
   } 
   middlewares(){
       this.server.use(express.json())
       this.server.use(cors())
   }

   routes(){
       this.server.use(rotas)
   }

}

export default new App().server