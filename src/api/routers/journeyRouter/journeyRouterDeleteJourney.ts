import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { journeyValidationSchemaDeleteJourney } from '@freight/dolomite-router-validation-schemas';
import { journeyController } from '@app/api/controllers/journeyController';

export const journeyRouterDeleteJourney = Router(options).get(
  '/',
  checkSchema(<Schema>journeyValidationSchemaDeleteJourney),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { journeyId } = matchedData(req);
      const deleteResponse = await journeyController.deleteJourney({ journeyId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
