"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.journeyTypeControllerDeleteJourneyType = void 0;
const models_1 = require("@app/api/models");
const mongoose_1 = require("mongoose");
const journeyTypeControllerDeleteJourneyType = async ({ journeyTypeId }) => {
    const res = await models_1.JourneyTypeModel.findOneAndUpdate({
        _id: journeyTypeId,
    }, {
        adminStatusId: new mongoose_1.Types.ObjectId(),
    }, {
        includeResultMetadata: true,
    });
    return res;
};
exports.journeyTypeControllerDeleteJourneyType = journeyTypeControllerDeleteJourneyType;
