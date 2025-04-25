"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelValidatorAdminStatusId = void 0;
const leith_common_services_1 = require("@datr.tech/leith-common-services");
const modelValidatorAdminStatusId = async (doc, next) => {
    let adminStatusId;
    let hasStatus = false;
    if (doc && typeof doc.adminStatusId !== 'undefined') {
        adminStatusId = doc.adminStatusId;
    }
    if (adminStatusId) {
        hasStatus = await leith_common_services_1.adminService.hasStatus({
            statusId: adminStatusId,
        });
    }
    if (!hasStatus) {
        throw new Error('adminStatusId: invalid');
    }
    next();
};
exports.modelValidatorAdminStatusId = modelValidatorAdminStatusId;
