import { Router } from "express";


import Cadastro from "./models/Cadastro";

const rotas = new Router();

rotas.post("/cadastro/:cpf", Cadastro.create);
rotas.post("/cadastro/:nome", Cadastro.create);
rotas.post("/cadastro/:sobrenome", Cadastro.create);
rotas.post("/cadastro/:nacionalidade", Cadastro.create);
rotas.post("/cadastro/:cep", Cadastro.create);
rotas.post("/cadastro/:estado", Cadastro.create);
rotas.post("/cadastro/:cidade", Cadastro.create);
rotas.post("/cadastro/:logradouro", Cadastro.create);
rotas.post("/cadastro/:email", Cadastro.create);
rotas.post("/cadastro/:telefone", Cadastro.create);
export default rotas;
