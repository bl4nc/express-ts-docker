import express, { Application } from "express"; 
import { router } from "./router";
//@types/express - yarn add @types/express -D para adicionar 

const app: Application = express();
app.use(express.static("public"));

app.use(express.json());

app.use(router);

app.listen(3000 , ()=> console.log ('Server is run'));


/**
 * GET => Buscar informação 
 * POST => Inserir uma informação na API
 * PUT => Atualizar uma informação
 * Delete => Deletar uma informação 
 * Patch => Alterar uma informação especifica
 */

/**
 * Tipos de parâmetros
 * Routes params => localhost:3000/produtos/x
 * Query params => localhost:3000/produtos?name=x
 * Body params => {
 * "name":"x",
 * "description":"y"
 * }
 */