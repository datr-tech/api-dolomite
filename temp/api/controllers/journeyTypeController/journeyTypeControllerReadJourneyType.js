"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.journeyTypeControllerReadJourneyType = void 0;
const models_1 = require("@app/api/models");
const journeyTypeControllerReadJourneyType = async ({ journeyTypeId }) => {
    const journeyType = await models_1.JourneyTypeModel.findById(journeyTypeId);
    return journeyType;
};
exports.journeyTypeControllerReadJourneyType = journeyTypeControllerReadJourneyType;
