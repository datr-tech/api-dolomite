import { journeyTypeController } from '@app/api/controllers/journeyTypeController';
import { journeyTypeValidationSchemaDeleteJourneyType } from '@datr.tech/cargo-router-validation-schemas-dolomite';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const journeyTypeRouterDeleteJourneyType = Router(options).get(
  '/',
  checkSchema(<Schema>journeyTypeValidationSchemaDeleteJourneyType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { journeyTypeId } = matchedData(req);
      const deleteResponse = await journeyTypeController.deleteJourneyType({
        journeyTypeId,
      });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
