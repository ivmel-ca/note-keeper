export const formReducer = (state=[], action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return [action.payload, ...state];
        default:
            return state;
    }
};