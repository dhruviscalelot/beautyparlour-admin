import { createAsyncReducer } from "../../Helpers/AsyncReducerHelper";
import { AUTH_SYNC } from "../../Helpers/Type";


export const pageNameReducer = (state = { pageName: "" }, action) => {
    if (action.type === AUTH_SYNC.SET_PAGE_NAME)
        return { ...state, pageName: action.payload };
    return state;
}
