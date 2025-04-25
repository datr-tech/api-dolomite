import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
  modelValidatorJourneyId,
  modelValidatorResourceId,
} from '@app-ad/api/modelValidators';
import {
  hopModelSchema,
  hopModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-dolomite';
import { model, Schema } from 'mongoose';

const hopSchema = new Schema(hopModelSchema, hopModelSchemaOptions);

hopSchema.post('validate', modelValidatorAdminStatusId);
hopSchema.post('validate', modelValidatorAdminUserId);
hopSchema.post('validate', modelValidatorJourneyId);
hopSchema.post('validate', modelValidatorResourceId);

export const HopModel = model('HopModel', hopSchema);
