export interface IJourneyControllerCreateJourneyOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
