import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { journeyTypeRouterCreateJourneyType } from './journeyTypeRouterCreateJourneyType';
import { journeyTypeRouterDeleteJourneyType } from './journeyTypeRouterDeleteJourneyType';
import { journeyTypeRouterReadJourneyType } from './journeyTypeRouterReadJourneyType';
import { journeyTypeRouterUpdateJourneyType } from './journeyTypeRouterUpdateJourneyType';

export const journeyTypeRouter = Router(options)
  .use('/', journeyTypeRouterCreateJourneyType)
  .use('/:journeyTypeId', journeyTypeRouterDeleteJourneyType)
  .use('/:journeyTypeId', journeyTypeRouterReadJourneyType)
  .use('/:journeyTypeId', journeyTypeRouterUpdateJourneyType);
