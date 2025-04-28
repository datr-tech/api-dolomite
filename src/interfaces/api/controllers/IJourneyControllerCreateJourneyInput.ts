import { Types } from 'mongoose';

export interface IJourneyControllerCreateJourneyInput {
  frameworkId: Types.ObjectId;
  journeyTypeId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt: number;
}
