import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { journeyValidationSchemaUpdateJourney } from '@freight/dolomite-router-validation-schemas';
import { journeyController } from '@app/api/controllers/journeyController';

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
