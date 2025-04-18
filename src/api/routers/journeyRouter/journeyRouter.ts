import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { journeyRouterCreateJourney } from './journeyRouterCreateJourney';
import { journeyRouterDeleteJourney } from './journeyRouterDeleteJourney';
import { journeyRouterReadJourney } from './journeyRouterReadJourney';
import { journeyRouterUpdateJourney } from './journeyRouterUpdateJourney';

export const journeyRouter = Router(options)
  .use('/', journeyRouterCreateJourney)
  .use('/:journeyId', journeyRouterDeleteJourney)
  .use('/:journeyId', journeyRouterReadJourney)
  .use('/:journeyId', journeyRouterUpdateJourney);
