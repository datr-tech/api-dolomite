"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@app/api");
const leith_common_logger_1 = require("@datr.tech/leith-common-logger");
const leith_common_mongodb_connector_1 = require("@datr.tech/leith-common-mongodb-connector");
require("dotenv/config");
const { API_NAME, API_PORT } = process.env;
api_1.app.listen(API_PORT, () => {
    leith_common_logger_1.logger.info(`${API_NAME} listening on ${API_PORT}`);
    (async () => {
        await leith_common_mongodb_connector_1.db.connect();
    })();
});
