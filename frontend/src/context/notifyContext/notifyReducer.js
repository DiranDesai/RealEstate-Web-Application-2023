import { HIDE_NOTIFY, SHOW_NOTIFY } from "../types";

const notifyReducer = (state, action ) => {
    switch (action.type) {
        case SHOW_NOTIFY:
            return  {...state, error: true, payloadData: action.payload}
        break;
        case HIDE_NOTIFY:
            return  {...state, error: false, payloadData: null}
        break;
        default:
        return state;
    }

}

export default notifyReducer;