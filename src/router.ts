import { Router } from "express";
import {  HelloWorld } from "./Controllers/HelloWorld";
// import { CreateUserController } from "./controllers/CreateUserController";


const router = Router();

// const createUserController = new CreateUserController();

// router.post("/users",createUserController.handle)
const helloWorld = new HelloWorld();

router.get("/",helloWorld.Hello)

export { router };  