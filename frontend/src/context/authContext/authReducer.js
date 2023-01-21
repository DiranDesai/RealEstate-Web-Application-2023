const authReducer = (state, action) => {
    switch (action.type) {
        case "coding":
            return {...state, coding: true}
            break;
        default:
            break;
    }
}

export default authReducer;