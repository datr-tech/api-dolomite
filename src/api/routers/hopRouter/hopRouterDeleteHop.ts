import { hopController } from '@app/api/controllers/hopController';
import { hopValidationSchemaDeleteHop } from '@datr.tech/cargo-router-validation-schemas-dolomite';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

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
