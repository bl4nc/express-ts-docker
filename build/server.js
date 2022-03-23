"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = require("./router");
//@types/express - yarn add @types/express -D para adicionar 
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(router_1.router);
app.listen(3000, () => console.log('Server is run'));
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
