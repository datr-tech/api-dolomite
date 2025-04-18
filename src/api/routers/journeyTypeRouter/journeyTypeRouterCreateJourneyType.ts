import { journeyTypeController } from '@app/api/controllers/journeyTypeController';
import { IJourneyTypeModel } from '@app/interfaces/api/models/IJourneyTypeModel';
import { journeyTypeValidationSchemaCreateJourneyType } from '@datr.tech/cargo-router-validation-schemas-dolomite';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const journeyTypeRouterCreateJourneyType = Router(options).post(
  '/',
  checkSchema(<Schema>journeyTypeValidationSchemaCreateJourneyType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IJourneyTypeModel>(req);
      const journeyTypeId =
        await journeyTypeController.createJourneyType(validatedParams);

      res.status(201).send({ journeyTypeId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
