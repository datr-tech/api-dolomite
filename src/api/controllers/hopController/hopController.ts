import { hopControllerCreateHop } from "./hopControllerCreateHop";
import { hopControllerUpdateHop } from "./hopControllerUpdateHop";
import { hopControllerReadHop } from "./hopControllerReadHop";
import { hopControllerDeleteHop } from "./hopControllerDeleteHop";


export const hopController = { 
	createHop: hopControllerCreateHop,
	updateHop: hopControllerUpdateHop,
	readHop: hopControllerReadHop,
	deleteHop: hopControllerDeleteHop,
	
};
