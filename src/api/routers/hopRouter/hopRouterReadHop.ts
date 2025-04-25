import { hopController } from '@app-ad/api/controllers/hopController';
import { hopValidationSchemaReadHop } from '@datr.tech/cargo-router-validation-schemas-dolomite';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

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
