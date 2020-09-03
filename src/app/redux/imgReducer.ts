import { IMG_ACTION, AddImg } from './img.action';

const initialState = {
    img: [{
        author: "author",
        url: "",
        id: "1"
    }, {
        author: "author2",
        url: "",
        id: "1"
    }]
}

export function imgReducer(state = initialState, action: AddImg) {
    switch (action.type) {
        case IMG_ACTION.ADD_IMG:
            return {
                ...state,
                img: [...state.img, ...action.payload]
            }
            break;
        default:
            return state;
            break;
    }
}