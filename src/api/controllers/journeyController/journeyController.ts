import { journeyControllerCreateJourney } from "./journeyControllerCreateJourney";
import { journeyControllerUpdateJourney } from "./journeyControllerUpdateJourney";
import { journeyControllerReadJourney } from "./journeyControllerReadJourney";
import { journeyControllerDeleteJourney } from "./journeyControllerDeleteJourney";


export const journeyController = { 
	createJourney: journeyControllerCreateJourney,
	updateJourney: journeyControllerUpdateJourney,
	readJourney: journeyControllerReadJourney,
	deleteJourney: journeyControllerDeleteJourney,
	
};
