import { hopController } from '@app-ad/api/controllers/hopController';
import { hopValidationSchemaUpdateHop } from '@datr.tech/cargo-router-validation-schemas-dolomite';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const hopRouterUpdateHop = Router(options).patch(
  '/',
  checkSchema(<Schema>hopValidationSchemaUpdateHop),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { hopId, ...payload } = matchedData(req);
      const updateStatus = await hopController.updateHop({ hopId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
