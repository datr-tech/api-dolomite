import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { hopValidationSchemaCreateHop } from '@freight/dolomite-router-validation-schemas';
import { hopController } from '@app/api/controllers/hopController';
import { IHopModel } from '@app/interfaces/api/models/IHopModel';

export const hopRouterCreateHop = Router(options).post(
  '/',
  checkSchema(<Schema>hopValidationSchemaCreateHop),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IHopModel>(req);
      const hopId = await hopController.createHop(validatedParams);

      res.status(201).send({ hopId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
