import { Types } from 'mongoose';

export interface IJourneyModel {
  journeyId: Types.ObjectId;
  frameworkId: Types.ObjectId;
  journeyTypeId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId | undefined;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
