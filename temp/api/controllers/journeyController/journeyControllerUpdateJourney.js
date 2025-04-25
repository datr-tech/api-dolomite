"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.journeyControllerUpdateJourney = void 0;
const models_1 = require("@app/api/models");
const journeyControllerUpdateJourney = async ({ journeyId, payload }) => {
    const res = await models_1.JourneyModel.findOneAndUpdate({
        _id: journeyId,
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
exports.journeyControllerUpdateJourney = journeyControllerUpdateJourney;
