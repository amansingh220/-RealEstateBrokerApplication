import { UPDATE_DEAL_DATA } from "./../deal_action_types/updateDeal";

export const updateDealData = (payload) => {
  return {
    type: UPDATE_DEAL_DATA,
    payload: payload,
  };
};
