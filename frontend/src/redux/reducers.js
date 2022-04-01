import {
  GET_ALL_PROPERTIES, GET_ALL_IMAGES
} from "./actions";



export const propertyReducer = (state = {}, action) => {
  if (action.type === GET_ALL_PROPERTIES) {
    return {
      ...state,
      properties: action.properties,
    };
  }
  else if (action.type === GET_ALL_IMAGES) {
    return {
      ...state,
      images: action.images,
    };
  }
  return state
};
