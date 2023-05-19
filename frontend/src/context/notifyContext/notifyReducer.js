const notifyReducer = (state, action ) => {
    switch (action.type) {
        case true:
            return  {...state, error: true, payloadData: action.payload}
        break;
        case false:
            return  {...state, error: false, msg: ""}
        break;
        default:
        return state;
    }

}

export default notifyReducer;