import { IJourneyTypeModel } from '@app-ad/interfaces/api/models';
 
export interface IJourneyTypeControllerReadJourneyTypeOutputSuccess {
  error: false;
	payload: 	{ 
		journeyTypeModel: IJourneyTypeModel;
	};
}
