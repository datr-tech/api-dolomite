"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hopControllerDeleteHop = void 0;
const models_1 = require("@app/api/models");
const mongoose_1 = require("mongoose");
const hopControllerDeleteHop = async ({ hopId }) => {
    const res = await models_1.HopModel.findOneAndUpdate({
        _id: hopId,
    }, {
        adminStatusId: new mongoose_1.Types.ObjectId(),
    }, {
        includeResultMetadata: true,
    });
    return res;
};
exports.hopControllerDeleteHop = hopControllerDeleteHop;
