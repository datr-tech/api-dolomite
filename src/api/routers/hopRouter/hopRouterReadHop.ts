import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { hopValidationSchemaReadHop } from '@freight/dolomite-router-validation-schemas';
import { hopController } from '@app/api/controllers/hopController';

export const hopRouterReadHop = Router(options).get(
  '/',
  checkSchema(<Schema>hopValidationSchemaReadHop),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { hopId } = matchedData(req);
      const hop = await hopController.readHop({ hopId });

      res.status(200).send({ hop });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
