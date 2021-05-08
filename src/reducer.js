export const initialState = {
    user: null,
    chatroomlist: null,
    chatslist: null
};

export const actionTypes = {
    SET_USER: "SET_USER",
    SET_CHATRL: "SET_CHATRL",
    SET_CHATSL: "SET_CHATSL"
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        case actionTypes.SET_CHATRL:
            return {
                ...state,
                chatroomlist: action.chatroomlist
            }
        case actionTypes.SET_CHATSL:
            return {
                ...state,
                chatslist: action.chatslist
            }

        default:
            return state;
    }
};

export default reducer;