import { Router } from 'express';
import { options } from '@freight/common-router-options';
import { hopRouterCreateHop } from './hopRouterCreateHop';
import { hopRouterDeleteHop } from './hopRouterDeleteHop';
import { hopRouterReadHop } from './hopRouterReadHop';
import { hopRouterUpdateHop } from './hopRouterUpdateHop';

export const hopRouter = Router(options)
  .use('/', hopRouterCreateHop)
  .use('/:hopId', hopRouterDeleteHop)
  .use('/:hopId', hopRouterReadHop)
  .use('/:hopId', hopRouterUpdateHop);
