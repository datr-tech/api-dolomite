import { Types } from 'mongoose';

export interface IHopControllerDeleteHopOutputSuccess {
  error: false;
  payload: {
    hopId: Types.ObjectId;
  };
}
