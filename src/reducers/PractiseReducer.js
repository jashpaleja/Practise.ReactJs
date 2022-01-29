import { GET_NUMBER } from "../actions/ActionTypes";

const INITIAL_STATE = {
  phoneNo: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_NUMBER:
      return { ...state, phoneNo: action.payload };
    default:
      return state;
  }
};
