import axios from '../../axios-message';
import { FETCH_MESS_SUCCESS} from "./messageTypeActions";

export const fetchMessageSuccess = messages => ({type: FETCH_MESS_SUCCESS, messages});

export const fetchMessage = () => {
    return dispatch=>{
        return axios.get('./messages').then(response => {
            dispatch(fetchMessageSuccess(response.data))
        })
    };
};

export const createMessage = messageData => {
    console.log(messageData);
    return dispatch => {
        return axios.post('/messages', messageData).then(
            () => dispatch(fetchMessage())
        );
    };
};