import { journeyController } from '@app-ad/api/controllers/journeyController';
import { IJourneyModel } from '@app-ad/interfaces/api/models/IJourneyModel';
import { journeyValidationSchemaCreateJourney } from '@datr.tech/cargo-router-validation-schemas-dolomite';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

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
