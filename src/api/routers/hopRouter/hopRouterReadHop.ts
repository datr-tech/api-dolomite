import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { hopValidationSchemaReadHop } from '@datr.tech/cargo-router-validation-schemas-dolomite';
import { options } from '@datr.tech/leith-config-api-router-options';
import { hopController } from '@app-ad/api/controllers/hopController';
import { IHopModel } from '@app-ad/interfaces/api/models/IHopModel';
import {
	IHopControllerReadHopOutputError as IControllerError,
	IHopControllerReadHopOutputSuccess as IControllerSuccess
} from '@app-ad/interfaces/api/controllers';

/**
 * @name					hopRouterReadHop
 *
 * @description		The 'readHop' router for 'hop', whose expected
 *                inputs have been defined within the following schema:
 *                'hopValidationSchemaReadHop'.
 *                
 *                The schema will be used by 'express-validator' to perform input validation.
 *                When the validation process succeeds, control will pass to the associated
 *                controller, 'hopController', which, when successful, will return
 *                a common status (or 'stat') object, whose 'payload' will contain
 *                'hopModel'.
 *
 * @param					{Request}		req		The Express request.
 * @param         {Response}	res		The Express response.
 * @return				{undefined}
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 *
 * @see		        | Outcomes                    | HTTP status codes |
 *                | --------------------------- | ----------------- |
 *                | On success                  | 200               |
 *                | Router validation error     | 422               |
 *                | Controller validation error | 404               |		    
 *                | Server error                | 500               |		    
 */
export const hopRouterReadHop = Router(options).get(
  '/',
  checkSchema(<Schema>hopValidationSchemaReadHop),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

		try {
			/*
       * Handle validation errors
       * ------------------------
       *
       * Handle validation errors in relation to the fields
       * defined within 'hopValidationSchemaReadHop'.
       * Additionally, and because of the inclusion of 'checkExact()'
       * above, ONLY fields defined within the schema will be accepted.
       */
			if (!errors.isEmpty()) {
				res.status(422).send({ error: errors.array() });
			}
	
			/*
       * Pass the validated params to the controller
       * -------------------------------------------
       *
       * On validation success, retrieve the 'validatedParams' object
       * from the received 'req' (using 'matchedData') and pass them
       * to 'hopController'. 
       */
			
			const validatedParams = matchedData<IHopModel>(req);
			const stat = await hopController.readHop(validatedParams);
			

			/*
       * Handle controller errors
       * ------------------------
       *
       * If the common controller response object, 'stat', is not truthy, or if
       * 'stat.error' equals true, then handle the error returned by the controller.
       */
			if (!stat || stat.error) {
				const { message, responseStatusCode } = (stat as IControllerError).payload;
				res.status(responseStatusCode).send({ error: message });
			}

		  /*
       * Handle successful controller responses
       * --------------------------------------
       *
       * If the controller call proved to be successful, extract
       * 'hopModel' from 'stat.payload' and return
       * it with an appropriate status code.
       */
			
			const { hopModel, responseStatusCode } = (stat as IControllerSuccess).payload;
			res.status(responseStatusCode).send({ hopModel });
			
		} catch(error) {

      /*
       * Handle any errors not caught above. 
       */
			const { message } = error;
			res.status(500).send({ error: message });
		}
  },
);
