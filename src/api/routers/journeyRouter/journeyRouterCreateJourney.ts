import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { journeyValidationSchemaCreateJourney } from '@freight/dolomite-router-validation-schemas';
import { journeyController } from '@app/api/controllers/journeyController';
import { IJourneyModel } from '@app/interfaces/api/models/IJourneyModel';

export const journeyRouterCreateJourney = Router(options).post(
  '/',
  checkSchema(<Schema>journeyValidationSchemaCreateJourney),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IJourneyModel>(req);
      const journeyId = await journeyController.createJourney(validatedParams);

      res.status(201).send({ journeyId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
