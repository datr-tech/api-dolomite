"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.journeyRouter = void 0;
const leith_config_api_router_options_1 = require("@datr.tech/leith-config-api-router-options");
const express_1 = require("express");
const journeyRouterCreateJourney_1 = require("./journeyRouterCreateJourney");
const journeyRouterDeleteJourney_1 = require("./journeyRouterDeleteJourney");
const journeyRouterReadJourney_1 = require("./journeyRouterReadJourney");
const journeyRouterUpdateJourney_1 = require("./journeyRouterUpdateJourney");
exports.journeyRouter = (0, express_1.Router)(leith_config_api_router_options_1.options)
    .use('/', journeyRouterCreateJourney_1.journeyRouterCreateJourney)
    .use('/:journeyId', journeyRouterDeleteJourney_1.journeyRouterDeleteJourney)
    .use('/:journeyId', journeyRouterReadJourney_1.journeyRouterReadJourney)
    .use('/:journeyId', journeyRouterUpdateJourney_1.journeyRouterUpdateJourney);
