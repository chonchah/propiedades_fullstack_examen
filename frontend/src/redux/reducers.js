import {
  GET_ALL_PROPERTIES, GET_ALL_IMAGES, GET_ALL_AMENITIES 
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
  else if (action.type === GET_ALL_AMENITIES) {
    return {
      ...state,
      amenities: action.amenities,
    };
  }
  return state
};
