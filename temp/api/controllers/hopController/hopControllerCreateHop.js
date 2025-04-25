"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hopControllerCreateHop = void 0;
const models_1 = require("@app/api/models");
const mongoose_1 = require("mongoose");
const hopControllerCreateHop = async ({ name, description, order, journeyId, resourceId, adminUserId, adminStatusId, }) => {
    const hopId = new mongoose_1.Types.ObjectId();
    const modelParams = {
        hopId,
        name,
        description,
        order,
        journeyId,
        resourceId,
        adminUserId,
        adminStatusId,
    };
    const hopModel = new models_1.HopModel(modelParams);
    await hopModel.save();
    return hopModel._id;
};
exports.hopControllerCreateHop = hopControllerCreateHop;
