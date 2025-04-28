import { Types } from 'mongoose';

export interface IJourneyTypeControllerDeleteJourneyTypeOutputSuccess {
  error: false;
  payload: {
    journeyTypeId: Types.ObjectId;
  };
}
