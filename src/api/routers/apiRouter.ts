import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { hopRouter } from './hopRouter';
import { journeyRouter } from './journeyRouter';
import { journeyTypeRouter } from './journeyTypeRouter';

export const apiRouter = Router(options)
  .use('/api/v1/hop', hopRouter)
  .use('/api/v1/journey', journeyRouter)
  .use('/api/v1/journeyType', journeyTypeRouter);
