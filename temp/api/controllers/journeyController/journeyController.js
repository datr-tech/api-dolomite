"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.journeyController = void 0;
const journeyControllerCreateJourney_1 = require("./journeyControllerCreateJourney");
const journeyControllerDeleteJourney_1 = require("./journeyControllerDeleteJourney");
const journeyControllerReadJourney_1 = require("./journeyControllerReadJourney");
const journeyControllerUpdateJourney_1 = require("./journeyControllerUpdateJourney");
exports.journeyController = {
    createJourney: journeyControllerCreateJourney_1.journeyControllerCreateJourney,
    deleteJourney: journeyControllerDeleteJourney_1.journeyControllerDeleteJourney,
    readJourney: journeyControllerReadJourney_1.journeyControllerReadJourney,
    updateJourney: journeyControllerUpdateJourney_1.journeyControllerUpdateJourney,
};
