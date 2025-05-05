import { Types } from 'mongoose';

export interface IHopControllerCreateHopOutputSuccess {
  error: false;
  payload: {
    hopId: Types.ObjectId;
    responseStatusCode: number;
  };
}
