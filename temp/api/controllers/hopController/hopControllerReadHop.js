"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hopControllerReadHop = void 0;
const models_1 = require("@app/api/models");
const hopControllerReadHop = async ({ hopId }) => {
    const hop = await models_1.HopModel.findById(hopId);
    return hop;
};
exports.hopControllerReadHop = hopControllerReadHop;
