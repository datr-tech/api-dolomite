import { IHopModel } from '@app-ad/interfaces/api/models';

export interface IHopControllerReadHopOutputSuccess {
  error: false;
  payload: {
    hopModel: IHopModel;
    responseStatusCode: number;
  };
}
