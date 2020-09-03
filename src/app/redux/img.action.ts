import { Action } from "@ngrx/store";

export namespace IMG_ACTION {
    export const GET_IMG = "GET_IMG"
    export const ADD_FAVORITES_IMG = "ADD_FAVORITES_IMG"
    export const CLEAR_OUTPUT_IMG = "CLEAR_OUTPUT_IMG"
}
export class GetImg implements Action {
    readonly type = IMG_ACTION.GET_IMG
    constructor(public payload: []) {}
}
export class AddImg implements Action {
    readonly type = IMG_ACTION.ADD_FAVORITES_IMG
    constructor(public payload: []) {}
}
export class ClearOutputImg implements Action {
    readonly type = IMG_ACTION.CLEAR_OUTPUT_IMG
    constructor(public payload: []) {}
}

