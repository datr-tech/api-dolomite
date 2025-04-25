"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const leith_config_api_router_options_1 = require("@datr.tech/leith-config-api-router-options");
const express_1 = require("express");
const hopRouter_1 = require("./hopRouter");
const journeyRouter_1 = require("./journeyRouter");
const journeyTypeRouter_1 = require("./journeyTypeRouter");
exports.apiRouter = (0, express_1.Router)(leith_config_api_router_options_1.options)
    .use('/api/v1/hopRouter', hopRouter_1.hopRouter)
    .use('/api/v1/journeyRouter', journeyRouter_1.journeyRouter)
    .use('/api/v1/journeyTypeRouter', journeyTypeRouter_1.journeyTypeRouter);
