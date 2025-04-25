"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.journeyRouterUpdateJourney = void 0;
const journeyController_1 = require("@app/api/controllers/journeyController");
const cargo_router_validation_schemas_dolomite_1 = require("@datr.tech/cargo-router-validation-schemas-dolomite");
const leith_config_api_router_options_1 = require("@datr.tech/leith-config-api-router-options");
const express_1 = require("express");
const express_validator_1 = require("express-validator");
exports.journeyRouterUpdateJourney = (0, express_1.Router)(leith_config_api_router_options_1.options).patch('/', (0, express_validator_1.checkSchema)(cargo_router_validation_schemas_dolomite_1.journeyValidationSchemaUpdateJourney), (0, express_validator_1.checkExact)(), async (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty()) {
        const { journeyId, ...payload } = (0, express_validator_1.matchedData)(req);
        const updateStatus = await journeyController_1.journeyController.updateJourney({ journeyId, payload });
        res.status(200).send({ updateStatus });
    }
    else {
        res.status(404).send({ error: errors.array() });
    }
});
