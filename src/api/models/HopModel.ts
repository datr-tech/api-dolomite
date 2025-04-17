import { model, Schema } from 'mongoose';
import { hopModelSchema, hopModelSchemaOptions } from '@freight/dolomite-model-schemas';
import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
  modelValidatorJourneyId,
  modelValidatorResourceId,
} from '@app/api/modelValidators';

const hopSchema = new Schema(hopModelSchema, hopModelSchemaOptions);

hopSchema.post('validate', modelValidatorAdminStatusId);
hopSchema.post('validate', modelValidatorAdminUserId);
hopSchema.post('validate', modelValidatorJourneyId);
hopSchema.post('validate', modelValidatorResourceId);

export const HopModel = model('HopModel', hopSchema);
