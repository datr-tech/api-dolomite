import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app-ad/api/modelValidators/foreign';
import {
  journeyTypeModelSchema,
  journeyTypeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-dolomite';
import { model, Schema } from 'mongoose';

const journeyTypeSchema = new Schema(
  journeyTypeModelSchema,
  journeyTypeModelSchemaOptions,
);

journeyTypeSchema.post('validate', modelValidatorAdminStatusId);
journeyTypeSchema.post('validate', modelValidatorAdminUserId);

export const JourneyTypeModel = model('JourneyTypeModel', journeyTypeSchema);
