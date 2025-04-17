import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { hopValidationSchemaDeleteHop } from '@freight/dolomite-router-validation-schemas';
import { hopController } from '@app/api/controllers/hopController';

export const hopRouterDeleteHop = Router(options).get(
  '/',
  checkSchema(<Schema>hopValidationSchemaDeleteHop),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { hopId } = matchedData(req);
      const deleteResponse = await hopController.deleteHop({ hopId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
