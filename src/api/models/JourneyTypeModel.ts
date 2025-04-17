import { model, Schema } from 'mongoose';
import { journeyTypeModelSchema, journeyTypeModelSchemaOptions } from '@freight/dolomite-model-schemas';
import { modelValidatorAdminStatusId, modelValidatorAdminUserId } from '@app/api/modelValidators';

const journeyTypeSchema = new Schema(journeyTypeModelSchema, journeyTypeModelSchemaOptions);

journeyTypeSchema.post('validate', modelValidatorAdminStatusId);
journeyTypeSchema.post('validate', modelValidatorAdminUserId);

export const JourneyTypeModel = model('JourneyTypeModel', journeyTypeSchema);
