import { Types } from 'mongoose';

export interface IJourneyControllerUpdateJourneyInput {
  journeyId: Types.ObjectId;
  payload: {
    frameworkId?: Types.ObjectId;

    journeyTypeId?: Types.ObjectId;

    description?: string;

    name?: string;

    adminStatusId?: Types.ObjectId;

    adminUserId?: Types.ObjectId;

    createdAt?: number;

    updatedAt?: number;
  };
}
