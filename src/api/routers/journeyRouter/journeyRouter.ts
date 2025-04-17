import { Router } from 'express';
import { options } from '@freight/common-router-options';
import { journeyRouterCreateJourney } from './journeyRouterCreateJourney';
import { journeyRouterDeleteJourney } from './journeyRouterDeleteJourney';
import { journeyRouterReadJourney } from './journeyRouterReadJourney';
import { journeyRouterUpdateJourney } from './journeyRouterUpdateJourney';

export const journeyRouter = Router(options)
  .use('/', journeyRouterCreateJourney)
  .use('/:journeyId', journeyRouterDeleteJourney)
  .use('/:journeyId', journeyRouterReadJourney)
  .use('/:journeyId', journeyRouterUpdateJourney);
