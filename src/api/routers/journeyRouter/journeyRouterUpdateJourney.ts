import { journeyController } from '@app/api/controllers/journeyController';
import { journeyValidationSchemaUpdateJourney } from '@datr.tech/cargo-router-validation-schemas-dolomite';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const journeyRouterUpdateJourney = Router(options).patch(
  '/',
  checkSchema(<Schema>journeyValidationSchemaUpdateJourney),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { journeyId, ...payload } = matchedData(req);
      const updateStatus = await journeyController.updateJourney({ journeyId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
