import { journeyController } from '@app/api/controllers/journeyController';
import { journeyValidationSchemaDeleteJourney } from '@datr.tech/cargo-router-validation-schemas-dolomite';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

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
