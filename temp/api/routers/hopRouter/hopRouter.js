"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hopRouter = void 0;
const leith_config_api_router_options_1 = require("@datr.tech/leith-config-api-router-options");
const express_1 = require("express");
const hopRouterCreateHop_1 = require("./hopRouterCreateHop");
const hopRouterDeleteHop_1 = require("./hopRouterDeleteHop");
const hopRouterReadHop_1 = require("./hopRouterReadHop");
const hopRouterUpdateHop_1 = require("./hopRouterUpdateHop");
exports.hopRouter = (0, express_1.Router)(leith_config_api_router_options_1.options)
    .use('/', hopRouterCreateHop_1.hopRouterCreateHop)
    .use('/:hopId', hopRouterDeleteHop_1.hopRouterDeleteHop)
    .use('/:hopId', hopRouterReadHop_1.hopRouterReadHop)
    .use('/:hopId', hopRouterUpdateHop_1.hopRouterUpdateHop);
