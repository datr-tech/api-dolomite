import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { journeyValidationSchemaReadJourney } from '@freight/dolomite-router-validation-schemas';
import { journeyController } from '@app/api/controllers/journeyController';

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
