import { journeyController } from '@app/api/controllers/journeyController';
import { journeyValidationSchemaReadJourney } from '@datr.tech/cargo-router-validation-schemas-dolomite';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const journeyRouterReadJourney = Router(options).get(
  '/',
  checkSchema(<Schema>journeyValidationSchemaReadJourney),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { journeyId } = matchedData(req);
      const journey = await journeyController.readJourney({ journeyId });

      res.status(200).send({ journey });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
