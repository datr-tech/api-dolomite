"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hopController = void 0;
const hopControllerCreateHop_1 = require("./hopControllerCreateHop");
const hopControllerDeleteHop_1 = require("./hopControllerDeleteHop");
const hopControllerReadHop_1 = require("./hopControllerReadHop");
const hopControllerUpdateHop_1 = require("./hopControllerUpdateHop");
exports.hopController = {
    createHop: hopControllerCreateHop_1.hopControllerCreateHop,
    deleteHop: hopControllerDeleteHop_1.hopControllerDeleteHop,
    readHop: hopControllerReadHop_1.hopControllerReadHop,
    updateHop: hopControllerUpdateHop_1.hopControllerUpdateHop,
};
