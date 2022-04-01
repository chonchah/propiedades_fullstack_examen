import Axios from "axios";
import {
  GET_ALL_PROPERTIES,
  GET_ALL_IMAGES
} from "./actions";

const API_URL = process.env.REACT_APP_API_URL
const REACT_APP_PEXELS_API=process.env.REACT_APP_PEXELS_API
const REACT_APP_PEXELS_APIKEY=process.env.REACT_APP_PEXELS_APIKEY

export const getPexelsImages=()=>dispatch=>{
    
    let req = new Request(`${REACT_APP_PEXELS_API}/search?per_page=16&size=small&orientation=landscape&query=apartment`, {headers:new Headers({'Authorization':REACT_APP_PEXELS_APIKEY})})
    fetch(req).then(res=>res.json()).then(response=>{
        return dispatch({
            type: GET_ALL_IMAGES,
            images: response
        })
    })
}

export const getAllProperties = () => dispatch => {
    Axios.get(`${API_URL}/properties`).then(resp => {
        return dispatch({
            type: GET_ALL_PROPERTIES,
            properties: resp.data
        })
    })
}