export interface IHopControllerReadHopOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
