import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
  modelValidatorFrameworkId,
  modelValidatorJourneyTypeId,
} from '@api-dolomite/api/modelValidators';
import {
  journeyModelSchema,
  journeyModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-dolomite';
import { model, Schema } from 'mongoose';

const journeySchema = new Schema(journeyModelSchema, journeyModelSchemaOptions);

journeySchema.post('validate', modelValidatorAdminStatusId);
journeySchema.post('validate', modelValidatorAdminUserId);
journeySchema.post('validate', modelValidatorFrameworkId);
journeySchema.post('validate', modelValidatorJourneyTypeId);

export const JourneyModel = model('JourneyModel', journeySchema);
