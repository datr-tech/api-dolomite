import { HopModel } from '@app/api/models';

export const hopControllerReadHop = async ({ hopId }) => {
  const hop = await HopModel.findById(hopId);

  return hop;
};
