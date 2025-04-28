import { journeyTypeControllerCreateJourneyType } from "./journeyTypeControllerCreateJourneyType";
import { journeyTypeControllerUpdateJourneyType } from "./journeyTypeControllerUpdateJourneyType";
import { journeyTypeControllerReadJourneyType } from "./journeyTypeControllerReadJourneyType";
import { journeyTypeControllerDeleteJourneyType } from "./journeyTypeControllerDeleteJourneyType";


export const journeyTypeController = { 
	createJourneyType: journeyTypeControllerCreateJourneyType,
	updateJourneyType: journeyTypeControllerUpdateJourneyType,
	readJourneyType: journeyTypeControllerReadJourneyType,
	deleteJourneyType: journeyTypeControllerDeleteJourneyType,
	
};
