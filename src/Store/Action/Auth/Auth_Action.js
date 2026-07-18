// import { createAsyncAction } from "../../Helpers/AsyncReducerHelper";
import { AUTH_SYNC } from "../../Helpers/Type";

export const setPageName = (payload) => ({
    type: AUTH_SYNC.SET_PAGE_NAME,
    payload,
})