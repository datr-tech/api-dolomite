import { Types } from 'mongoose';

export interface IHopControllerUpdateHopOutputSuccess {
  error: false;
  payload: {
    hopId: Types.ObjectId;
    responseStatusCode: number;
  };
}
