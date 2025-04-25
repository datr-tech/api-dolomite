"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelValidatorResourceId = void 0;
const leith_common_services_1 = require("@datr.tech/leith-common-services");
const modelValidatorResourceId = async (doc, next) => {
    let resourceId;
    let hasResource = false;
    if (doc && typeof doc.resourceId !== 'undefined') {
        resourceId = doc.resourceId;
    }
    if (resourceId) {
        hasResource = await leith_common_services_1.entityService.hasResource({ resourceId });
    }
    if (!hasResource) {
        throw new Error('resourceId: invalid');
    }
    next();
};
exports.modelValidatorResourceId = modelValidatorResourceId;
