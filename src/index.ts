import { app } from '@app-ad/api';
import { HopModel, JourneyModel, JourneyTypeModel } from '@app-ad/api/models';
import { apiName, apiPort, dbHost, dbName, dbPort } from '@app-ad/config';
import { logger } from '@datr.tech/leith-common-logger';
import { db } from '@datr.tech/leith-common-mongodb-connector';
import { dolomiteSeeder } from '@datr.tech/leith-common-seeders';
import 'dotenv/config';

app.listen(apiPort, () => {
  logger.info(`api-${apiName} listening on ${apiPort}`);

  (async () => {
    const stat = await db.connect({
      host: dbHost,
      name: dbName,
      port: dbPort,
      user: undefined,
      pass: undefined,
    });

    const { isConnected } = stat;

    if (isConnected) {
      dolomiteSeeder(HopModel, JourneyModel, JourneyTypeModel);
    }
  })();
});
