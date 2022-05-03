"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const HelloWorld_1 = require("./Controllers/HelloWorld");
const router = (0, express_1.Router)();
exports.router = router;
const helloWorld = new HelloWorld_1.HelloWorld();
router.get("/", helloWorld.Hello);
