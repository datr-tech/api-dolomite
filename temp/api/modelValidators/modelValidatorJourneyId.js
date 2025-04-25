"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelValidatorJourneyId = void 0;
const models_1 = require("@app/api/models");
const modelValidatorJourneyId = async (doc, next) => {
    let journey;
    let journeyId;
    if (doc && typeof doc.journeyId !== 'undefined') {
        journeyId = doc.journeyId;
    }
    if (journeyId) {
        journey = await models_1.JourneyModel.findById(journeyId);
    }
    if (!journey) {
        throw new Error('journeyId: invalid');
    }
    next();
};
exports.modelValidatorJourneyId = modelValidatorJourneyId;
