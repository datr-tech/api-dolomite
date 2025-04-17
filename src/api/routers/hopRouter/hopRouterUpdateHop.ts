import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { hopValidationSchemaUpdateHop } from '@freight/dolomite-router-validation-schemas';
import { hopController } from '@app/api/controllers/hopController';

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
