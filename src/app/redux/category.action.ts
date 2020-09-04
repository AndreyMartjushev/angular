import { Action } from "@ngrx/store";

export namespace CATEGORY_ACTION {
    export const NEW_CATEGORY = "NEW_CATEGORY"
}
export class newCategory implements Action {
    readonly type = CATEGORY_ACTION.NEW_CATEGORY
    constructor(public payload) {}
}