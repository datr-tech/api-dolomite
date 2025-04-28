import { Types } from 'mongoose';

export interface IJourneyTypeControllerCreateJourneyTypeOutputSuccess {
  error: false;
  payload: {
    journeyTypeId: Types.ObjectId;
  };
}
