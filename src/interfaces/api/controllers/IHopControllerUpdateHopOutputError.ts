export interface IHopControllerUpdateHopOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
