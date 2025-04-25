"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.journeyTypeControllerCreateJourneyType = void 0;
const models_1 = require("@app/api/models");
const mongoose_1 = require("mongoose");
const journeyTypeControllerCreateJourneyType = async ({ name, description, adminStatusId, adminUserId, }) => {
    const journeyTypeId = new mongoose_1.Types.ObjectId();
    const modelParams = {
        journeyTypeId,
        name,
        description,
        adminStatusId,
        adminUserId,
    };
    const journeyTypeModel = new models_1.JourneyTypeModel(modelParams);
    await journeyTypeModel.save();
    return journeyTypeModel._id;
};
exports.journeyTypeControllerCreateJourneyType = journeyTypeControllerCreateJourneyType;
