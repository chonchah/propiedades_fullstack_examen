import {
  GET_ALL_PROPERTIES
} from "./actions";

export const propertyReducer = (state = {}, action) => {
  if (action.type === GET_ALL_PROPERTIES) {
    return {
      ...state,
      properties: action.properties,
    };
  }
  return state
};
