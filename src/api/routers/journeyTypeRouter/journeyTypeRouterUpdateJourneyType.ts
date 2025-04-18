import { journeyTypeController } from '@app/api/controllers/journeyTypeController';
import { journeyTypeValidationSchemaUpdateJourneyType } from '@datr.tech/cargo-router-validation-schemas-dolomite';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const journeyTypeRouterUpdateJourneyType = Router(options).patch(
  '/',
  checkSchema(<Schema>journeyTypeValidationSchemaUpdateJourneyType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { journeyTypeId, ...payload } = matchedData(req);
      const updateStatus = await journeyTypeController.updateJourneyType({
        journeyTypeId,
        payload,
      });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
