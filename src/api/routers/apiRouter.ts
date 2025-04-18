import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { hopRouter } from './hopRouter';
import { journeyRouter } from './journeyRouter';
import { journeyTypeRouter } from './journeyTypeRouter';

export const apiRouter = Router(options)
  .use('/api/v1/hopRouter', hopRouter)
  .use('/api/v1/journeyRouter', journeyRouter)
  .use('/api/v1/journeyTypeRouter', journeyTypeRouter);
