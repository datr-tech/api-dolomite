import { Types } from 'mongoose';

export interface IJourneyControllerUpdateJourneyOutputSuccess {
  error: false;
  payload: {
    journeyId: Types.ObjectId;
  };
}
