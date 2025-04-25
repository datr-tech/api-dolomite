"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const routers_1 = require("@app/api/routers");
const express_1 = __importDefault(require("express"));
const { API_NAME } = process.env;
const app = (0, express_1.default)().use(express_1.default.json()).use(`/${API_NAME}`, routers_1.apiRouter);
exports.app = app;
