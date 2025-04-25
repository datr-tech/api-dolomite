"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.journeyTypeController = void 0;
const journeyTypeControllerCreateJourneyType_1 = require("./journeyTypeControllerCreateJourneyType");
const journeyTypeControllerDeleteJourneyType_1 = require("./journeyTypeControllerDeleteJourneyType");
const journeyTypeControllerReadJourneyType_1 = require("./journeyTypeControllerReadJourneyType");
const journeyTypeControllerUpdateJourneyType_1 = require("./journeyTypeControllerUpdateJourneyType");
exports.journeyTypeController = {
    createJourneyType: journeyTypeControllerCreateJourneyType_1.journeyTypeControllerCreateJourneyType,
    deleteJourneyType: journeyTypeControllerDeleteJourneyType_1.journeyTypeControllerDeleteJourneyType,
    readJourneyType: journeyTypeControllerReadJourneyType_1.journeyTypeControllerReadJourneyType,
    updateJourneyType: journeyTypeControllerUpdateJourneyType_1.journeyTypeControllerUpdateJourneyType,
};
