import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { journeyTypeValidationSchemaReadJourneyType } from '@freight/dolomite-router-validation-schemas';
import { journeyTypeController } from '@app/api/controllers/journeyTypeController';

export const journeyTypeRouterReadJourneyType = Router(options).get(
  '/',
  checkSchema(<Schema>journeyTypeValidationSchemaReadJourneyType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { journeyTypeId } = matchedData(req);
      const journeyType = await journeyTypeController.readJourneyType({ journeyTypeId });

      res.status(200).send({ journeyType });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
