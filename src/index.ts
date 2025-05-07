import { app } from '@app-ad/api';
import { HopModel, JourneyModel, JourneyTypeModel } from '@app-ad/api/models';
import { apiName, apiPort, dbHost, dbName, dbPort } from '@app-ad/config';
import { logger } from '@datr.tech/leith-common-logger';
import { db } from '@datr.tech/leith-common-mongodb-connector';
import { dolomiteSeeder } from '@datr.tech/leith-common-seeders';
import 'dotenv/config';

app.listen(apiPort, () => {
  logger.info(`${apiName} listening on ${apiPort}`);

  (async () => {
    await db.connect({
      host: dbHost,
      name: dbName,
      port: dbPort,
      user: undefined,
      pass: undefined,
    });

    await dolomiteSeeder(HopModel, JourneyModel, JourneyTypeModel);
  })();
});
