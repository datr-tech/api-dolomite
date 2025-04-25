"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.journeyTypeControllerUpdateJourneyType = void 0;
const models_1 = require("@app/api/models");
const journeyTypeControllerUpdateJourneyType = async ({ journeyTypeId, payload, }) => {
    const res = await models_1.JourneyTypeModel.findOneAndUpdate({
        _id: journeyTypeId,
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
exports.journeyTypeControllerUpdateJourneyType = journeyTypeControllerUpdateJourneyType;
