"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelValidatorJourneyTypeId = void 0;
const models_1 = require("@app/api/models");
const modelValidatorJourneyTypeId = async (doc, next) => {
    let journeyType;
    let journeyTypeId;
    if (doc && typeof doc.journeyTypeId !== 'undefined') {
        journeyTypeId = doc.journeyTypeId;
    }
    if (journeyTypeId) {
        journeyType = await models_1.JourneyTypeModel.findById(journeyTypeId);
    }
    if (!journeyType) {
        throw new Error('journeyTypeId: invalid');
    }
    next();
};
exports.modelValidatorJourneyTypeId = modelValidatorJourneyTypeId;
