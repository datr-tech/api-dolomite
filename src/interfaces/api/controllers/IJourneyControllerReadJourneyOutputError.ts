export interface IJourneyControllerReadJourneyOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
