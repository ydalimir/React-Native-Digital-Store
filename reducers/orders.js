import { SET_ORDERS, START, SUCCESS, FAIL } from './SET_ORDERS';

const INITIAL_STATE = {
  items: [],
};

const orders = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${SET_ORDERS}${START}`:
      return { ...state, items: [] };
    case `${SET_ORDERS}${SUCCESS}`:
      return { ...state, items: [...action.payload] };
    case `${SET_ORDERS}${FAIL}`:
      return { ...state, items: [] };
    default:
      return state;
  }
};
export default user;