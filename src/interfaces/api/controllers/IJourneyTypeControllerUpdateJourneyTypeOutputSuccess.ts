import { Types } from 'mongoose';

export interface IJourneyTypeControllerUpdateJourneyTypeOutputSuccess {
  error: false;
  payload: {
    journeyTypeId: Types.ObjectId;
    responseStatusCode: number;
  };
}
