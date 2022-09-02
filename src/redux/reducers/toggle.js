import { TOGGLER } from "../actionTypes";

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLER:
      return !state;
    default:
      return state;
  }
};
