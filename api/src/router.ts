import { Router } from "express";
import {  HelloWorld } from "./Controllers/HelloWorld";


const router = Router();


const helloWorld = new HelloWorld();

router.get("/",helloWorld.Hello)

export { router };  