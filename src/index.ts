import { app } from '@app-ad/api';
import { apiName, apiPort } from '@app-ad/config';
import { logger } from '@datr.tech/leith-common-logger';
import 'dotenv/config';

app.listen(apiPort, () => {
  logger.info(`${apiName} listening on ${apiPort}`);

  (async () => {
    //await db.connect();
  })();
});
