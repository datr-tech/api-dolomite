"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.journeyControllerReadJourney = void 0;
const models_1 = require("@app/api/models");
const journeyControllerReadJourney = async ({ journeyId }) => {
    const journey = await models_1.JourneyModel.findById(journeyId);
    return journey;
};
exports.journeyControllerReadJourney = journeyControllerReadJourney;
