export interface IJourneyControllerDeleteJourneyOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
