import { hopControllerCreateHop } from './hopControllerCreateHop';
import { hopControllerDeleteHop } from './hopControllerDeleteHop';
import { hopControllerReadHop } from './hopControllerReadHop';
import { hopControllerUpdateHop } from './hopControllerUpdateHop';

export const hopController = {
  createHop: hopControllerCreateHop,
  updateHop: hopControllerUpdateHop,
  readHop: hopControllerReadHop,
  deleteHop: hopControllerDeleteHop,
};
