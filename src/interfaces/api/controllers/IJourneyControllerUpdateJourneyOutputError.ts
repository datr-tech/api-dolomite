export interface IJourneyControllerUpdateJourneyOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
