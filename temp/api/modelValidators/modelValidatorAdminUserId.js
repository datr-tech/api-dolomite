"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelValidatorAdminUserId = void 0;
const leith_common_services_1 = require("@datr.tech/leith-common-services");
const modelValidatorAdminUserId = async (doc, next) => {
    let adminUserId;
    let hasUser = false;
    if (doc && typeof doc.adminUserId !== 'undefined') {
        adminUserId = doc.adminUserId;
    }
    if (adminUserId) {
        hasUser = await leith_common_services_1.personaService.hasUser({
            userId: adminUserId,
            isAdmin: true,
        });
    }
    if (!hasUser) {
        throw new Error('adminUserId: invalid');
    }
    next();
};
exports.modelValidatorAdminUserId = modelValidatorAdminUserId;
