export interface IHopControllerDeleteHopOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
