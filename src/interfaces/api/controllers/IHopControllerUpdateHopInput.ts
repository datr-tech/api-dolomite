import { Types } from "mongoose";

export interface IHopControllerUpdateHopInput {
  
		hopId: Types.ObjectId;
		payload: {
			
			
					journeyId ?:  Types.ObjectId;
				
			
					resourceId ?:  Types.ObjectId;
				
			
					description ?:  string;
				
			
					name ?:  string;
				
			
					order ?:  number;
				
			
					adminStatusId ?:  Types.ObjectId;
				
			
					adminUserId ?:  Types.ObjectId;
				
			
					createdAt ?:  number;
				
			
					updatedAt ?:  number;
				
			
		};
	
}
