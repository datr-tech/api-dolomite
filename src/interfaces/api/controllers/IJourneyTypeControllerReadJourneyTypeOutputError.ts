export interface IJourneyTypeControllerReadJourneyTypeOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
