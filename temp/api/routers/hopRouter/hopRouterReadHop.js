"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hopRouterReadHop = void 0;
const hopController_1 = require("@app/api/controllers/hopController");
const cargo_router_validation_schemas_dolomite_1 = require("@datr.tech/cargo-router-validation-schemas-dolomite");
const leith_config_api_router_options_1 = require("@datr.tech/leith-config-api-router-options");
const express_1 = require("express");
const express_validator_1 = require("express-validator");
exports.hopRouterReadHop = (0, express_1.Router)(leith_config_api_router_options_1.options).get('/', (0, express_validator_1.checkSchema)(cargo_router_validation_schemas_dolomite_1.hopValidationSchemaReadHop), (0, express_validator_1.checkExact)(), async (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty()) {
        const { hopId } = (0, express_validator_1.matchedData)(req);
        const hop = await hopController_1.hopController.readHop({ hopId });
        res.status(200).send({ hop });
    }
    else {
        res.status(404).send({ error: errors.array() });
    }
});
