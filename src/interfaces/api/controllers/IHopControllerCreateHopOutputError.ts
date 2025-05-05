export interface IHopControllerCreateHopOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
