"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.journeyControllerDeleteJourney = void 0;
const models_1 = require("@app/api/models");
const mongoose_1 = require("mongoose");
const journeyControllerDeleteJourney = async ({ journeyId }) => {
    const res = await models_1.JourneyModel.findOneAndUpdate({
        _id: journeyId,
    }, {
        adminStatusId: new mongoose_1.Types.ObjectId(),
    }, {
        includeResultMetadata: true,
    });
    return res;
};
exports.journeyControllerDeleteJourney = journeyControllerDeleteJourney;
