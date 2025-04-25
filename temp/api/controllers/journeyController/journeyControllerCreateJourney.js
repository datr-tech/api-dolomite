"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.journeyControllerCreateJourney = void 0;
const models_1 = require("@app/api/models");
const mongoose_1 = require("mongoose");
const journeyControllerCreateJourney = async ({ name, frameworkId, journeyTypeId, adminUserId, description, adminStatusId, }) => {
    const journeyId = new mongoose_1.Types.ObjectId();
    const modelParams = {
        journeyId,
        name,
        frameworkId,
        journeyTypeId,
        adminUserId,
        description,
        adminStatusId,
    };
    const journeyModel = new models_1.JourneyModel(modelParams);
    await journeyModel.save();
    return journeyModel._id;
};
exports.journeyControllerCreateJourney = journeyControllerCreateJourney;
