import { Types } from 'mongoose';

export interface IHopControllerCreateHopInput {
  journeyId: Types.ObjectId;
  resourceId: Types.ObjectId;
  description: string | undefined;
  name: string;
  order: number;
  adminStatusId: Types.ObjectId;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt: number;
}
