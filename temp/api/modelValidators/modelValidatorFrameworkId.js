"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelValidatorFrameworkId = void 0;
const leith_common_services_1 = require("@datr.tech/leith-common-services");
const modelValidatorFrameworkId = async (doc, next) => {
    let frameworkId;
    let hasFramework = false;
    if (doc && typeof doc.frameworkId !== 'undefined') {
        frameworkId = doc.frameworkId;
    }
    if (frameworkId) {
        hasFramework = await leith_common_services_1.entityService.hasFramework({ frameworkId });
    }
    if (!hasFramework) {
        throw new Error('frameworkId: invalid');
    }
    next();
};
exports.modelValidatorFrameworkId = modelValidatorFrameworkId;
