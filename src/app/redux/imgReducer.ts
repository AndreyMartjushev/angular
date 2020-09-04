import { IMG_ACTION } from './img.action';
import { CATEGORY_ACTION } from './category.action';

const initialState = {
    img: [],
    favorites: [],
    category: ["cat", "dog", "other"]
}

export function imgReducer(state = initialState, action) {
    switch (action.type) {
        case IMG_ACTION.GET_IMG:
            return {
                ...state,
                img: [...state.img, ...action.payload]
            }
        case IMG_ACTION.ADD_FAVORITES_IMG:
            if(state.favorites.find((item) => item.id === action.payload.id)) {
                return {
                    ...state,
                    favorites: [...state.favorites]
                }
            } else {
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload]
                }
            }
        case IMG_ACTION.CLEAR_OUTPUT_IMG:
            return {
                ...state,
                img: []
            }
        case CATEGORY_ACTION.NEW_CATEGORY:
            return {
                ...state,
                category: [...state.category, ...action.payload]
            }
        default:
            return state;
    }
}