"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.journeyTypeRouter = void 0;
const leith_config_api_router_options_1 = require("@datr.tech/leith-config-api-router-options");
const express_1 = require("express");
const journeyTypeRouterCreateJourneyType_1 = require("./journeyTypeRouterCreateJourneyType");
const journeyTypeRouterDeleteJourneyType_1 = require("./journeyTypeRouterDeleteJourneyType");
const journeyTypeRouterReadJourneyType_1 = require("./journeyTypeRouterReadJourneyType");
const journeyTypeRouterUpdateJourneyType_1 = require("./journeyTypeRouterUpdateJourneyType");
exports.journeyTypeRouter = (0, express_1.Router)(leith_config_api_router_options_1.options)
    .use('/', journeyTypeRouterCreateJourneyType_1.journeyTypeRouterCreateJourneyType)
    .use('/:journeyTypeId', journeyTypeRouterDeleteJourneyType_1.journeyTypeRouterDeleteJourneyType)
    .use('/:journeyTypeId', journeyTypeRouterReadJourneyType_1.journeyTypeRouterReadJourneyType)
    .use('/:journeyTypeId', journeyTypeRouterUpdateJourneyType_1.journeyTypeRouterUpdateJourneyType);
