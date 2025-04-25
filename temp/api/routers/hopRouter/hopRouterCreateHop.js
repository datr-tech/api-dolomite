"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hopRouterCreateHop = void 0;
const hopController_1 = require("@app/api/controllers/hopController");
const cargo_router_validation_schemas_dolomite_1 = require("@datr.tech/cargo-router-validation-schemas-dolomite");
const leith_config_api_router_options_1 = require("@datr.tech/leith-config-api-router-options");
const express_1 = require("express");
const express_validator_1 = require("express-validator");
exports.hopRouterCreateHop = (0, express_1.Router)(leith_config_api_router_options_1.options).post('/', (0, express_validator_1.checkSchema)(cargo_router_validation_schemas_dolomite_1.hopValidationSchemaCreateHop), (0, express_validator_1.checkExact)(), async (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty()) {
        const validatedParams = (0, express_validator_1.matchedData)(req);
        const hopId = await hopController_1.hopController.createHop(validatedParams);
        res.status(201).send({ hopId });
    }
    else {
        res.status(404).send({ error: errors.array() });
    }
});
