import { Action } from "@ngrx/store";

export namespace IMG_ACTION {
    export const ADD_IMG = "ADD_IMG"
}
export class AddImg implements Action {
    readonly type = IMG_ACTION.ADD_IMG

    constructor(public payload: []) {}
}
