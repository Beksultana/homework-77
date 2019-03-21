import {FETCH_MESS_SUCCESS} from "../actions/messageTypeActions";

const initialState = {
    messages: []
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MESS_SUCCESS:
            return {
                ...state,
                messages: action.messages
            };
        default:
            return state;
    }
};

export default messagesReducer;