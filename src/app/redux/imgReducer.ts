import { IMG_ACTION } from './img.action';

const initialState = {
    img: [],
    favorites: []
}

export function imgReducer(state = initialState, action) {
    switch (action.type) {
        case IMG_ACTION.GET_IMG:
            return {
                ...state,
                img: [...state.img, ...action.payload]
            }
        case IMG_ACTION.ADD_FAVORITES_IMG:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case IMG_ACTION.CLEAR_OUTPUT_IMG:
            return {
                ...state,
                img: []
            }
        default:
            return state;
    }
}