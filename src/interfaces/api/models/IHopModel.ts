import { Types } from 'mongoose';

export interface IHopModel {
  hopId: Types.ObjectId;
  journeyId: Types.ObjectId;
  resourceId: Types.ObjectId;
  description: string | undefined;
  name: string;
  order: number;
  adminStatusId: Types.ObjectId | undefined;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
