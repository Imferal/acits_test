const FETCH_BEARER_TOKEN = 'FETCH_BEARER_TOKEN';
const SET_BEARER_TOKEN = 'SET_BEARER_TOKEN';
const REMOVE_BEARER_TOKEN = 'REMOVE_BEARER_TOKEN';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
const REMOVE_ERROR_MESSAGE = 'REMOVE_ERROR_MESSAGE';

const initialState = {
    BEARER_TOKEN_ISFETCHING: false,
    BEARER_TOKEN_ISLOADED: false,
    errorMessage: null,
}

export default function apiReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_BEARER_TOKEN: {
            state.BEARER_TOKEN_ISFETCHING = true;
            state.BEARER_TOKEN_ISLOADED = false;
            return { ...state };
        }

        case SET_BEARER_TOKEN: {
            state.BEARER_TOKEN_ISFETCHING = false;
            state.BEARER_TOKEN_ISLOADED = true;
            localStorage.setItem('bearerToken', action.bearerToken);
            return { ...state };
        }

        case REMOVE_BEARER_TOKEN: {
            state.BEARER_TOKEN_ISFETCHING = false;
            state.BEARER_TOKEN_ISLOADED = false;
            return { ...state };
        }

        case SET_ERROR_MESSAGE: {
            if (action.errorMessage === 'No active account found with the given credentials') {
                state.errorMessage = 'Имя пользователя или пароль введены не верно'
            }
            else {
                state.errorMessage = action.errorMessage;
            }
            return { ...state };
        }

        case REMOVE_ERROR_MESSAGE: {
            state.errorMessage = null;
            return { ...state };
        }

        default:
            return { ...state };
    }
}

// export const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
export const fetchBearerToken = () => ({ type: FETCH_BEARER_TOKEN });
export const setBearerToken = bearerToken => ({
    type: SET_BEARER_TOKEN,
    bearerToken,
});
export const removeBearerToken = () => ({ type: REMOVE_BEARER_TOKEN });


export const setErrorMessage = errorMessage => ({
    type: SET_ERROR_MESSAGE,
    errorMessage,
});
export const removeErrorMessage = () => ({ type: REMOVE_ERROR_MESSAGE });
