import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { hopRouterCreateHop } from './hopRouterCreateHop';
import { hopRouterDeleteHop } from './hopRouterDeleteHop';
import { hopRouterReadHop } from './hopRouterReadHop';
import { hopRouterUpdateHop } from './hopRouterUpdateHop';

export const hopRouter = Router(options)
  .use('/', hopRouterCreateHop)
  .use('/:hopId', hopRouterDeleteHop)
  .use('/:hopId', hopRouterReadHop)
  .use('/:hopId', hopRouterUpdateHop);
