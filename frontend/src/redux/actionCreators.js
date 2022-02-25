import Axios from "axios";
import {
  GET_ALL_PROPERTIES
} from "./actions";

const API_URL = process.env.REACT_APP_API_URL

export const getAllProperties = () => dispatch => {
    Axios.get(`${API_URL}/properties`).then(resp => {
        return dispatch({
            type: GET_ALL_PROPERTIES,
            properties: resp.data
        })
    })
}