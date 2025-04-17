import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { journeyTypeValidationSchemaDeleteJourneyType } from '@freight/dolomite-router-validation-schemas';
import { journeyTypeController } from '@app/api/controllers/journeyTypeController';

export const journeyTypeRouterDeleteJourneyType = Router(options).get(
  '/',
  checkSchema(<Schema>journeyTypeValidationSchemaDeleteJourneyType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { journeyTypeId } = matchedData(req);
      const deleteResponse = await journeyTypeController.deleteJourneyType({ journeyTypeId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
