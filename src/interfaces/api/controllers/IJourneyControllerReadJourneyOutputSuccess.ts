import { IJourneyModel } from '@app-ad/interfaces/api/models';

export interface IJourneyControllerReadJourneyOutputSuccess {
  error: false;
  payload: {
    journeyModel: IJourneyModel;
  };
}
