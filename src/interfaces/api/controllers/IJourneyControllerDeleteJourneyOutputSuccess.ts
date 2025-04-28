import { Types } from 'mongoose';

export interface IJourneyControllerDeleteJourneyOutputSuccess {
  error: false;
	payload: 	{ 
		journeyId: Types.ObjectId;
	};
}
