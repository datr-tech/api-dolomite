"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hopControllerUpdateHop = void 0;
const models_1 = require("@app/api/models");
const hopControllerUpdateHop = async ({ hopId, payload }) => {
    const res = await models_1.HopModel.findOneAndUpdate({
        _id: hopId,
    }, payload, {
        includeResultMetadata: true,
    });
    let existingDocUpdated;
    if (typeof res !== 'undefined' &&
        typeof res.lastErrorObject !== 'undefined' &&
        typeof res.lastErrorObject.updatedExisting !== 'undefined') {
        existingDocUpdated = res.lastErrorObject.updatedExisting === false;
    }
    return existingDocUpdated;
};
exports.hopControllerUpdateHop = hopControllerUpdateHop;
