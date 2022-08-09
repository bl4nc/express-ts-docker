import express, { Application } from "express"; 
import { router } from "./router";

const app: Application = express();
app.use(express.static("public"));

app.use(express.json());

app.use(router);

app.listen(3000 , ()=> console.log ('Server is run'));
