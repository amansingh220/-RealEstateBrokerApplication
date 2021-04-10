import { UPDATE_DEAL_DATA } from "./../deal_action_types/updateDeal";
import { REMOVE_DEAL_DATA } from "./../deal_action_types/removeDealData";

const initialState = {
  custId: "",
  propId: "",
  dealResponse: {},
};

const reducerforUpdateDealData = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DEAL_DATA:
      return action.payload;
    case REMOVE_DEAL_DATA:
      return {};
    default:
      return state;
  }
};

export default reducerforUpdateDealData;
