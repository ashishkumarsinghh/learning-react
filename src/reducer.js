import { combineReducers } from "redux";
import { LIKE_PRODUCT } from "./actions";
import seed from "./components/ProductHunt/seed";

let mainReducer = (initialState = seed, action) => {
  switch (action.type) {
    case LIKE_PRODUCT:
      console.log(action);
      const newState = {
        ...initialState,
        products: {
          ...initialState.products,
          [action.id]: {
            ...initialState.products[action.id],
            likes: initialState.products[action.id].likes + 1
          }
        }
      };
      return newState;
    default:
      return initialState;
  }
};
const rootReducer = combineReducers({ mainReducer });
export default rootReducer;
