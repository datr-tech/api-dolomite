import { Types } from 'mongoose';

export interface IJourneyControllerCreateJourneyOutputSuccess {
  error: false;
	payload: 	{ 
		journeyId: Types.ObjectId;
	};
}
