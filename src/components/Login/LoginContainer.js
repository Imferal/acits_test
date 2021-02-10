import { connect } from "react-redux";
import {
    fetchBearerToken,
    removeBearerToken,
    removeErrorMessage,
    setBearerToken,
    setErrorMessage
} from "../../redux/apiReducer";
import Login from "./Login";

const mapStateToProps = state => {
    return {
        tokenIsFetching: state.api.BEARER_TOKEN_ISFETCHING,
        tokenIsLoaded: state.api.BEARER_TOKEN_ISLOADED,
        errorMessage: state.api.errorMessage,
        isAuthorized: state.api.IS_AUTHORIZED,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setBearerToken: bearerToken => {
            dispatch(setBearerToken(bearerToken));
        },
        fetchBearerToken: () => {
            dispatch(fetchBearerToken());
        },
        removeBearerToken: () => {
            dispatch(removeBearerToken());
        },
        setErrorMessage: errorMessage => {
            dispatch(setErrorMessage(errorMessage));
        },
        removeErrorMessage: () => {
            dispatch(removeErrorMessage())
        },
    };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(
    Login
);

export default LoginContainer;