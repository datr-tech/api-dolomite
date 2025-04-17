import { Router } from 'express';
import { options } from '@freight/common-router-options';
import { journeyTypeRouterCreateJourneyType } from './journeyTypeRouterCreateJourneyType';
import { journeyTypeRouterDeleteJourneyType } from './journeyTypeRouterDeleteJourneyType';
import { journeyTypeRouterReadJourneyType } from './journeyTypeRouterReadJourneyType';
import { journeyTypeRouterUpdateJourneyType } from './journeyTypeRouterUpdateJourneyType';

export const journeyTypeRouter = Router(options)
  .use('/', journeyTypeRouterCreateJourneyType)
  .use('/:journeyTypeId', journeyTypeRouterDeleteJourneyType)
  .use('/:journeyTypeId', journeyTypeRouterReadJourneyType)
  .use('/:journeyTypeId', journeyTypeRouterUpdateJourneyType);
