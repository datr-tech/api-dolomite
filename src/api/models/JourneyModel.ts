import { model, Schema } from 'mongoose';
import { journeyModelSchema, journeyModelSchemaOptions } from '@freight/dolomite-model-schemas';
import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
  modelValidatorJourneyTypeId,
  modelValidatorFrameworkId,
} from '@app/api/modelValidators';

const journeySchema = new Schema(journeyModelSchema, journeyModelSchemaOptions);

journeySchema.post('validate', modelValidatorAdminStatusId);
journeySchema.post('validate', modelValidatorAdminUserId);
journeySchema.post('validate', modelValidatorFrameworkId);
journeySchema.post('validate', modelValidatorJourneyTypeId);

export const JourneyModel = model('JourneyModel', journeySchema);
